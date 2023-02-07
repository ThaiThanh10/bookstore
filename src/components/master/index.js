import asset from '@/plugins/assets';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CONFIG from 'web.config';




const Footer = dynamic(() => import('@/components/elements/Footer'));
const Header = dynamic(() => import('@/components/elements/Header'), { ssr: false });


const GlobalStyle = dynamic(() => import('@/styles/common'), { ssr: false });
const MasterPage = ({ hideHeader, pageName, children, title, ...rest }) => {
    const router = useRouter();

    return (
        <>
            <NextSeo nofollow={CONFIG.environment != 'production'} noindex={CONFIG.environment != 'production'} />
            <Head>
                <title>{`${CONFIG.site.title} | ${title}`}</title>
                <meta name="description" content={CONFIG.site.description}></meta>
                <link rel="shortcut icon" href={asset("images/logo.png")} />
                <meta property="og:title" content={CONFIG.site.title} />
                <meta property="og:description" content={CONFIG.site.description} />
                <meta property="og:url" content={CONFIG.getBasePath() + router.asPath} />
                <meta property="og:image" content={`${CONFIG.getBasePath()}/share.png`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Do not add stylesheets using next/head 
				Use Document instead. See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component*/}
            </Head>

            <GlobalStyle />
            {/* - ADD MORE PROVIDER INSIDE THIS COMPONENT */}
            <main className='main'>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
};

export default MasterPage;
