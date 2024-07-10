import React from "react"
import Sidebar from "/app/components/sidebar";
import Home from "/app/components/home";
import Layout from "/app/layout";
import AnimatedPage from '/app/components/AnimatePage';
import Head from "next/head";
import Header from "/app/components/header";

const HomePage = () => {

  return(
    <Layout>
      <Head>
        <title>100F | One Space Where Crypto Projects and Educated Investors Meet</title>
        <meta name="description" content="100F is the ultimate platform where crypto projects and educated investors meet. Join our public and private audiences, and explore our educational platform and marketing expertise." />
        <meta name="keywords" content="crypto, investors, education, marketing, audience, projects, cryptocurrency, 100F" />
        <meta name="author" content="100F" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-M4EMMRL0TY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M4EMMRL0TY');
            `,
          }}
        />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage>
        <Home/>
      </AnimatedPage>
    </Layout>
  )
}

export default HomePage;
