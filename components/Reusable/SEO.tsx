import React from 'react';
import Head from 'next/head';

interface Props {
  children?: React.ReactNode;
}

const SEO: React.FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Jaden Moore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="gnLPOozHSJXW4wLOfSCFY1lWuRH-GXezcJHwTpvRWPw"
        />
        <meta
          name="description"
          content="Jaden | Portfolio | A Software Developer from California doing interesting things."
        />
        <meta
          name="og:description"
          content="Jaden | Portfolio | A Software Developer from California doing interesting things."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/eOTFEq0.png" />
        <meta property="og:url" content="https://jdyn.dev" />
        <link href="/static/styles/global.css" rel="stylesheet" />
      </Head>
      {children}
    </>
  );
};

export default SEO;
