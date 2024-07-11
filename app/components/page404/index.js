import Link from 'next/link';

const Page404 = () => {
  return (

<div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">
            Go back to Home
        </Link>
    </div>
    
  );
}
export default Page404;
