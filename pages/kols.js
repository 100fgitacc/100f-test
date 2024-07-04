import React from "react"
import Sidebar from "/app/components/sidebar";
import Kols from "/app/components/kols";
import AnimatedPage from '/app/components/AnimatePage';
import Layout from "/app/layout";
import Head from "next/head";
import Header from "/app/components/header";

const KolsPage = () => {
  return(
    <Layout>
      <Head>
        <title>100F | One Space Where Crypto Projects and Educated Investors Meet</title>
        <meta name="description" content="100F is a platform where crypto projects and educated investors meet. By collaborating with crypto projects, we provide them with powerful promotion based on strong marketing and native traffic from KOLs." />
        <meta name="keywords" content="crypto, investors, education, marketing, audience, projects, cryptocurrency, 100F, investment influencers, private investors, audience coverage" />
        <meta name="author" content="100F" />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage>
        <Kols/>
      </AnimatedPage>
    </Layout>
  )
}

export default KolsPage;