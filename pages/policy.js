import React from "react"
import Sidebar from "/app/components/sidebar";
import Policy from "/app/components/policy";
import AnimatedPage from '/app/components/AnimatePage';
import Layout from "/app/layout";
import Head from "next/head";
import Header from "/app/components/header";

const PolicyPage = () => {
  return(
    <Layout>
       <Head>
        <title>Policy</title>
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage>
        <Policy/>
      </AnimatedPage>
    </Layout>
  )
}

export default PolicyPage;