import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

import Nav from '../components/Nav'

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>BS Portfolio and Blog</title>
        </Head>
        <div className="container">
            <Nav/>
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    </>
}

export default MyApp
