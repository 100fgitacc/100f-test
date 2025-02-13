import React from "react"
import Sidebar from "/components/sidebar";
import Terms from "/components/terms";
import AnimatedPage from '/components/AnimatePage';
import Head from "next/head";
import Header from "/components/header";

const TermsPage = () => {
  return(
    <>
       <Head>
        <title>Policy</title>
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage>
        <Terms/>
      </AnimatedPage>
    </>
  )
}

export default TermsPage;