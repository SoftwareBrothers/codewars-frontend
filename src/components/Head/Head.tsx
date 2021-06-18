import NextHead from 'next/head';
import { FC } from 'react';

interface HeadProps {
  title: string;
}

const Head: FC<HeadProps> = ({ title }) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta name="description" content="Description" />
    <meta name="keywords" content="Keywords" />
    <title>{title}</title>

  </NextHead>
);

export default Head;
