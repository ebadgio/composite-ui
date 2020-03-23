import React from 'react';
import { GlobalStyles, ThemeProvider, baseTheme } from 'composite-ui';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import DocsLayout from '../components/Layout';
import MDX from '../components/MDX';
import Head from 'next/head';

const Main = ({ Component, pageProps }) => {
  const router = useRouter();

  let Layout;
  if (router.pathname === '/') {
    Layout = React.Fragment;
  } else {
    Layout = DocsLayout;
  }

  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="robots" content="index,follow" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="React, React.js, components, javascript, typescript, npm, library, package, styled system, styled-system"
        />
        <meta name="title" content="Composite UI" />
        <meta
          name="description"
          content="A simple, intuitive, and design system first React component library."
        />
        <meta property="og:url" content="https://composite-ui.com" />
        <meta property="og:title" content="Composite UI" />
        <meta
          property="og:description"
          content="A simple, intuitive, and design system first React component library."
        />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/composite-ui.com/meta-cover.png"
        />
      </Head>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <MDXProvider components={MDX}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
};

export default Main;
