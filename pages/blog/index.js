import React from 'react';
import Sidebar from "/app/components/sidebar";
import Layout from "/app/layout";
import { getAllPosts, getValidToken } from '/lib/api';
import Blog from '/app/components/blog';
import AnimatedPage from '/app/components/AnimatePage';
const readingTime = require('reading-time');
import Head from "next/head";
import Header from "/app/components/header";

const BlogPage = ({ blogData }) => {
  
  return(
    <Layout>
      <Head>
          <title>100F Blog | Product Updates, Partnerships, and Announcements</title>
          <meta name="description" content="Stay updated with the latest product updates, partnerships, and announcements from CoinMarketCap and our contributors. Explore a variety of articles on crypto and investment topics." />
          <meta name="keywords" content="crypto blog, CoinMarketCap, product updates, partnerships, announcements, cryptocurrency news, investment articles" />
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
        <Blog data={blogData}/>
      </AnimatedPage>
    </Layout>
  )
};

export async function getStaticProps() {
  const token = await getValidToken();

  const allPosts = await getAllPosts(token);


  const updatedPosts = allPosts.map(post => {
    const stats = readingTime(post.content.rendered);
    const mins = Math.ceil(stats.minutes); 
    return {
      ...post,
      readingTime: mins
    };
  });
  const blogData = {
    // blogPages:[],
    allPosts:updatedPosts,
    // popularPosts:[]
  };
  return {
    props: {
      blogData
    },
    revalidate: 60,
  };
}


export default BlogPage;