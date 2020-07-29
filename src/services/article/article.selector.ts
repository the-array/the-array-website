import { promises as fs } from "fs";
import marked from "marked";
import { format } from "date-fns";
import url from "url";
import path from "path";

import { ORIGIN } from "../../config";

export const titleSelector = ($: CheerioStatic) => {
  const titleElement = $("body > h1:first-child");

  if (!titleElement.length) throw new Error("Missing title");

  return titleElement.text();
};

export const descriptionSelector = ($: CheerioStatic) => {
  const descriptionElement = $("body > h1:first-child + p > strong:only-child");

  if (!descriptionElement.length) throw new Error("Missing lede");

  return descriptionElement.text();
};

export const plainTextSelector = ($: CheerioStatic) => {
  return $("body").text();
};

export const coverImageUrlSelector = (imagePath: string) => {
  return url.resolve(ORIGIN, imagePath || "");
};

export const coverImageSelector = ($: CheerioStatic) => {
  const coverImage = $("img").first();
  const src = coverImage.attr("src");
  const alt = coverImage.attr("alt");

  if (!src) throw new Error(`Missing cover image`);
  if (!alt) throw new Error(`Missing alt text on cover image`);

  return {
    src,
    alt
  };
};

export const timestampSelector = async (filePath: string) => {
  const stats = await fs.stat(filePath);

  return stats.birthtimeMs;
};

export const creationDateSelector = async (filePath: string) => {
  const stats = await fs.stat(filePath);

  return format(stats.birthtime, "MMMM dd, yyyy h:mm a");
};

export const htmlContentSelector = async (filePath: string) => {
  const markdown = (await fs.readFile(filePath, "utf8")).trim();

  return marked(markdown);
};

export const metadataSelector = async (
  articleDir: string
): Promise<{
  category: string;
  author: string;
}> => {
  const metadataFilePath = path.join(articleDir, "/metadata.json");

  return JSON.parse(await fs.readFile(metadataFilePath, "utf8"));
};
