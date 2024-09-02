import React from "react"
import Sidebar from "/components/sidebar";
import Disclamer from "/components/disclamer";
import AnimatedPage from '/components/AnimatePage';
import Head from "next/head";
import Header from "/components/header";

const DisclamerPage = () => {
  return(
    <>
       <Head>
        <title>Disclamer</title>
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage >
        <Disclamer/>
      </AnimatedPage>
    </>
  )
}

export default DisclamerPage;