
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import styles from '../../components/layout.module.css';
import utilStyles from '../../styles/utils.module.css';


export default function ContactMe() {
    return (
        <>
            <div className={styles.container}>
                <div className="row">
                    <Image 
                        src="/images/contactme.png"
                        layout='fill'
                        style={{objectFit:"cover"}}
                        objectPosition='center' 
                    />     
                </div>
            </div>
        <Layout>
                <Head>
                    <title>Contact Me</title>
                </Head>

            </Layout>
        </>
    )
    }