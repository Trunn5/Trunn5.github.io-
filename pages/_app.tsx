import React from 'react';
import { AppProps } from 'next/app';
import '../styles/reset.css';
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/comic.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
};

export default MyApp;
