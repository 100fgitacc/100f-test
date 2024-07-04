import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../app/layout';


const ContentPage = () => {
  const router = useRouter();
  const { content } = router.query;
  const Component = dynamic(() => import(`../app/components/${content? content : 'firstScreen'}`), {
    loading: () => <p>Loading...</p>
  });

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default ContentPage;