import React, { FC } from "react";
import styled from "styled-components";
import { Image, StyledImage } from "../../catalog/image/image.component";
import { Heading } from "../../catalog/heading/heading.component";
import { Article } from "../../services/article/article.entity";

type ArticleCardProps = Pick<
  Article,
  "title" | "url" | "thumbnail" | "coverImageAlt"
>;

const StyledArticleCard = styled.a`
  text-decoration: none;

  ${StyledImage} {
    width: 100%;
  }
`;

export const ArticleCard: FC<ArticleCardProps> = ({
  title,
  url,
  thumbnail,
  coverImageAlt
}) => {
  return (
    <StyledArticleCard href={url}>
      <Image alt={coverImageAlt} src={thumbnail} />
      <Heading component="h2" variant="h4">
        {title}
      </Heading>
    </StyledArticleCard>
  );
};