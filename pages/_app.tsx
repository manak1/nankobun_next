import '../styles/globals.css'
import '../lib/firebase'
import 'tailwindcss/tailwind.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
       <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
