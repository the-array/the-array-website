import path from "path";
import { promises as fs } from "fs";
import cheerio from "cheerio";
import readingTime from "reading-time";

import {
  coverImageSelector,
  coverImageUrlSelector,
  descriptionSelector,
  htmlContentSelector,
  metadataSelector,
  plainTextSelector,
  titleSelector
} from "./article.selector";
import {
  exportThumbnail,
  exportImages,
  toTitleCase,
  externalLinks
} from "./article.util";
import { ORIGIN } from "../../../config";

const articlesDir = path.join(process.cwd(), "data", "articles");

export const getArticleBySlug = async (slug: string) => {
  const articleDir = path.join(articlesDir, slug);
  const articleFilePath = path.join(articleDir, "/article.md");
  const {
    category,
    author,
    publishedAt,
    timestamp,
    keywords
  } = await metadataSelector(articleDir).catch(err => {
    console.error(
      err?.message || "Unable to parse metadata",
      `for article /${slug}`
    );
    process.exit(1);
  });

  const htmlContent = externalLinks(
    toTitleCase(
      await exportImages(await htmlContentSelector(articleFilePath), slug)
    )
  );

  const $ = cheerio.load(htmlContent);
  const plainText = plainTextSelector($);
  const { src: coverImageSrc, alt: coverImageAlt } = coverImageSelector($);
  const coverImageUrl = coverImageUrlSelector(coverImageSrc);
  const thumbnail = await exportThumbnail(coverImageSrc);

  return {
    url: `/article/${slug}`,
    absoluteUrl: `${ORIGIN}/article/${slug}`,
    slug,
    htmlContent,
    publishedAt,
    timestamp,
    keywords,
    title: titleSelector($),
    description: descriptionSelector($),
    readingTime: readingTime(plainText).text,
    coverImageUrl,
    coverImageAlt,
    thumbnail,
    category,
    author
  };
};

export const getArticles = async () => {
  const items = await fs.readdir(articlesDir, { withFileTypes: true });
  const folders = items.filter(item => item.isDirectory());

  return await Promise.all(
    folders.map(async ({ name }) => {
      const slug = path.parse(name).name;

      return await getArticleBySlug(slug);
    })
  );
};
