import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { getAllPosts, getRelatedPosts, getPostViews, getAuthorInfo, getValidToken } from '../../lib/api';
import axios from 'axios';
import Head from 'next/head';
import Header from "/app/components/header";
import Link from 'next/link';
import Layout from "/app/layout";
import styles from './index.module.css';
import Footer from '/app/components/footer';
import CoinsPlugin from '/app/components/coinsPlugin';
import Sidebar from '/app/components/sidebar';
import BlogCard from '/app/components/blogCard';
import cheerio from 'cheerio';
import Image from 'next/image';
const readingTime = require('reading-time');

const BlogPostPage = ({ post, relatedPosts, toc, views, authorInfo, token }) => {
  const { id, date, modified, title, content, author_name, acf } = post;

  const publishedTimeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
  const updatedTimeAgo = formatDistanceToNow(new Date(modified), { addSuffix: true });
  const extractImageUrl = (htmlContent) => {
    const matches = htmlContent.match(/<img .*?src=["'](.*?)["']/);
    return matches && matches[1] ? matches[1] : null;
  };
  const imageUrl = extractImageUrl(content.rendered);

  useEffect(() => {
    const updatePostViews = async () => {
      try {
        const response = await fetch(`https://lunarent.com.ua/test/wp-json/post-views-counter/view-post/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ counted: true, post_id: id }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Ошибка при обновлении просмотров:', error);
      }
    };
    updatePostViews();
  }, [id]);

  const [cleanedContent, setCleanedContent] = useState('');

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.rendered;

    let firstImgRemoved = false;
    const paragraphs = tempDiv.querySelectorAll('p');
    for (let i = 0; i < paragraphs.length; i++) {
      const images = paragraphs[i].querySelectorAll('img');
      if (images.length > 0 && !firstImgRemoved) {
        images[0].remove();
        firstImgRemoved = true;
        break;
      }
    }

    paragraphs.forEach(paragraph => {
      const images = paragraph.querySelectorAll('img');
      images.forEach(image => {
        paragraph.parentNode.insertBefore(image, paragraph);
      });

      if (paragraph.textContent.trim() === '' && paragraph.querySelectorAll('img').length === 0) {
        paragraph.remove();
      }
    });

    setCleanedContent(tempDiv.innerHTML);
  }, [content]);

  return (
    <>
    
    <Layout>
      <Head>
        <title>{acf.title || title.rendered}</title>
        <meta name="description" content={acf.description} />
        <meta name="keywords" content={acf.keywords} />
        <meta name="robots" content={acf.robots} />
        <meta property="og:image" content={acf.img_prew} />
      </Head>
        <Header/>
        <Sidebar />
        <div className='content'>
          <section className={styles['first-screen-card']}>
            <div className={styles['first-screen-card-container']}>
              <CoinsPlugin />
              <div className={styles.inner}>
                <Link href="/blog" className={styles.subtitle}>
                  Blog
                </Link>
                <h1 className={`main-title ${styles.title}`}>{title.rendered}</h1>
              </div>
            </div>
          </section>
          <section className={styles['blog-sections']}>
            <div className={styles['blog-info']}>
              <p className={styles.author}>By {author_name}</p>
              <div className={styles.date}>
                <p>{publishedTimeAgo}</p>
                <div>
                  <Image src='/assets/img/icons/clock.png' alt='icon' width={11} height={11}/>
                  <p>{post.readingTime}m</p>
                </div>
              </div>
            </div>
            {post.acf.comment && (
              <div className={styles.comment}>
                <p>{post.acf.comment}</p>
              </div>
            )}

            {imageUrl && <Image width={950} height={370} src={imageUrl} alt={title.rendered} className={styles.image} />}
            {toc.length > 0 && (
              <div className={styles['blog-nav']}>
                <h3 className={styles['blog-heading']}>TABLE OF CONTENTS</h3>
                <ul>
                  {toc.map(item => (
                    <li key={item.id}>
                      <a className={styles['blog-nav-item']} href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles['blog-inner']} dangerouslySetInnerHTML={{ __html: cleanedContent }} />
            <div className={styles['post-views']}>
              <Image width={20} height={20} src='/assets/img/icons/eye.png' alt='like icon' />
              <p>{views} people viewed this article</p>
            </div>
            {authorInfo && (
              <div className={styles['post-creator']}>
                <Image width={96} height={96} src={authorInfo.avatar_urls['96']} alt='author img' />
                <div className={styles['author-info']}>
                  <p>{authorInfo.name}</p>
                  <p>{authorInfo.description}</p>
                </div>
              </div>
            )}
            {relatedPosts.length > 0 && (
              <>
                <h3 className={styles['blog-heading']}>Related Articles</h3>
                <div className={`${styles['card-inner']} ${styles['related-cards-inner']}`}>
                  {relatedPosts.map((post) => (
                    <BlogCard key={post.id} post={post} gridView={true} relatedPosts={true} />
                  ))}
                </div>
                <Link href="/blog" className={`${styles['blog-button']} ${styles['all-articles-button']}`}>
                  See all articles
                </Link>
              </>
            )}

            <div className={styles['subscribe']}>
              <p>Join the thousands already learning crypto!</p>
              <h3>Join our free newsletter for daily crypto updates!</h3>
              <a href="mailto:info@100f.com" className={styles['subscribe-btn']}>
                Subscribe
              </a>
            </div>
          </section>
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const token = await getValidToken();
  const data = await getAllPosts(token);
  let paths = [];

  data.forEach(page => {
    const pageLink = page.link.replace(/\/+$/, "");

    paths.push({ params: { slug: [pageLink] } });
  });

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const token = await getValidToken();
  let allPages;
  try {
    const response = await axios.get('https://lunarent.com.ua/test/wp-json/wp/v2/all_posts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    allPages = response.data;
  } catch (error) {
    console.error(error);
  }

  const findPageBySlug = (pages, slugArray) => {
    let filteredPages = [...pages];
    let postData = null;

    for (let i = 0; i < slugArray.length; i++) {
      const slugPart = slugArray[i];
      postData = filteredPages.find(p => p.link.endsWith(`${slugPart}/`));
    }

    return postData;
  };

  const postData = findPageBySlug(allPages, slug);

  if (!postData) {
    return { notFound: true };
  }

  const $ = cheerio.load(postData.content.rendered);
  $('p').addClass(styles['blog-paragraph']);
  $('img').addClass(styles['blog-img']);
  $('a').addClass(styles['blog-link']);
  $('h1, h2, h3, h4, h5, h6').addClass(styles['blog-heading']);
  $('small').addClass(styles['blog-paragraph-small']);
  
  const toc = [];
  $('h1, h2, h3, h4, h5, h6').each((index, element) => {
    const id = `heading-${index}`;
    $(element).attr('id', id);
    toc.push({ id, text: $(element).text() });
  });
  postData.content.rendered = $.html();

  let relatedPosts = [];
  let authorInfo = [];
  let views;
  if (postData) {
    
    relatedPosts = await getRelatedPosts(token, postData.id);
    authorInfo = await getAuthorInfo(token, postData.author);
    views = await getPostViews(token, postData.id);

    const stats = readingTime(postData.content.rendered);
    postData.readingTime = Math.ceil(stats.minutes);
    
  
    relatedPosts = await Promise.all(relatedPosts.map(async (post) => {
      const postStats = readingTime(post.content.rendered);
      post.readingTime = Math.ceil(postStats.minutes);
      return post;
    }));
  }

  return { props: { post: postData, relatedPosts, toc, views, authorInfo, token }, revalidate: 1 };
}

export default BlogPostPage;
