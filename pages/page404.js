import React from "react"
import Sidebar from "/app/components/sidebar";
import Home from "/app/components/home";
import Layout from "/app/layout";
import Component404 from '/app/components/page404';
import Head from "next/head";
import Header from "/app/components/header";


const Page404 = () => {

  return(
    <Layout>
      <Head>
        <title>100F | One Space Where Crypto Projects and Educated Investors Meet</title>
        <meta name="description" content="100F is the ultimate platform where crypto projects and educated investors meet. Join our public and private audiences, and explore our educational platform and marketing expertise." />
        <meta name="keywords" content="crypto, investors, education, marketing, audience, projects, cryptocurrency, 100F" />
        <meta name="author" content="100F" />
      </Head>
      <Header/>
      <Sidebar/>
      <>12241141421</>
      {/* <Component404/> */}
    </Layout>
  )
}

export default Page404;
