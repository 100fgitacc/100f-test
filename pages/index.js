import React from "react"
import Sidebar from "/components/sidebar";
import Home from "/components/home";
import AnimatedPage from '/components/AnimatePage';
import Head from "next/head";
import Header from "/components/header";
import Script from 'next/script';

const HomePage = () => {

  return(
    <>
      <Head>
        <title>100 Franklins • The Unified Crypto Platform Connecting Qualified Projects With An Educated Audience </title>
        <meta name="description" content="Solving the most significant issue hindering the growth of the crypto market – short-term speculation" />
        <meta name="keywords" content="crypto, investors, education, marketing, audience, projects, cryptocurrency, 100F" />
        <meta name="author" content="100F" />
        <link rel="icon" href="/assets/img/favicon.ico" />
        <meta property="og:image" content='https://100f.com/assets/img/social_img.png' />
        <meta property="twitter:image" content='https://100f.com//assets/img/social_img.png' />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage>
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
        <Home/>
      </AnimatedPage>
    </>
  )
}

export default HomePage;
