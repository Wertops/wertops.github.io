import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ella Carter';
export const siteTitle = 'Ella Carters Personal Page';

export default function Layout({ children, home }) {
  return (
    <>
    
      <Head>
        <link rel="icon" href="/Treelogo.ico" />
        
        <meta
          name="description"
          content="Ella Carter's Personal Website"
        />
        <meta
          property="og:image"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container} >
      <header className={styles.header}>
        {home ? (
          <>
         
            <div className={styles.image_margin}>
              <Image
                priority
                src="/images/profile.png"
                className="img-responsive"
                height={200}
                width={260}
                //fill={}       
                alt=""
              />
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          
          </>
        ) : (<></>)}</header>
            {/*<Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
        </>*/}
          
        
      
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
    
    </>
    
  );
}