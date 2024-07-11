import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../app/layout';
import Page404 from './page404';


const ContentPage = () => {
  const router = useRouter();
  const { content } = router.query;
  const Component = dynamic(() => import(`../app/components/${content? content : 'firstScreen'}`), {
    loading: () => <Page404></Page404>
  });

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default ContentPage;