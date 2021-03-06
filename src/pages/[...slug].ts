import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { PageProps, PageComponent } from "../modules/page/page.component";
import { getPages } from "../services/page.service";

interface PageParams extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const pages = await getPages({
    props: ["slug"]
  });

  const paths = pages.map(({ slug }) => {
    return {
      params: { slug: slug.split("/") }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params
}) => {
  const slug = params!.slug.join("/");

  const [page] = await getPages({
    props: ["htmlContent", "title"],
    where: {
      slug
    }
  });

  return {
    props: {
      page
    }
  };
};

export default PageComponent;
