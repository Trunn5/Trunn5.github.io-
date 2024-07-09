import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/reset.css';
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/comic.css';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio for Fronetend course" />
        <meta name="author" content="Dmitrii Prosvirkin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
