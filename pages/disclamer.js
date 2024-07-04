import React from "react"
import Sidebar from "/app/components/sidebar";
import Disclamer from "/app/components/disclamer";
import AnimatedPage from '/app/components/AnimatePage';
import Layout from "/app/layout";
import Head from "next/head";
import Header from "/app/components/header";

const DisclamerPage = () => {
  return(
    <Layout>
       <Head>
        <title>Disclamer</title>
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage >
        <Disclamer/>
      </AnimatedPage>
    </Layout>
  )
}

export default DisclamerPage;