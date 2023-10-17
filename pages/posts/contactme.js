
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script'
import Layout from '../../components/layout';
//import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';

export default function ContactMe() {
    return (
        <>
            <div class="container-flex p-5">
                <div class="row">
                   
                        <Image class="utilStyles.landingImage"
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
            {/*<section>
                <h2>Email:</h2>
                <p>jackrusselruby@gmail.com</p>
                <h2>Phone Number:</h2>
                <p>(252) 678-0854</p>
    </section>*/}
        </>
    )
    }