import React, { FC } from "react";
import styled from "styled-components";
import { Text } from "../../catalog/text/text.component";
import Link from "next/link";
import { SITE_NAME } from "../../config";

const StyledFooter = styled.footer`
  background: #000;
  flex-grow: 1;
  padding: 30px 40px;

  p {
    color: #fff !important;
  }

  a {
    color: #fff;
  }
`;

export const Footer: FC = ({ ...otherProps }) => {
  return (
    <StyledFooter {...otherProps}>
      <Text component="p">Readers must be 18+</Text>
      <Link href="/[slug]" as="/about">
        <a>About</a>
      </Link>
      <Link href="/[slug]" as="/terms">
        <a>Terms</a>
      </Link>
      <Link href="/[slug]" as="/privacy">
        <a>Privacy</a>
      </Link>
      <Text component="p">© 2020 {SITE_NAME}</Text>
    </StyledFooter>
  );
};
