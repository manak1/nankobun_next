import "../lib/firebase";
import "tailwindcss/tailwind.css";
import "../styles/style.css";
import "animate.css";
import "../styles/legal.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="description"
          content="身長診断メーカー。いろんなモノであなたの身長をあらわす事が出来るサイトです。面白いモノで診断を作ってみたり、測定してみてください"
        />
        <title>身長診断メーカー</title>
        <meta property="og:title" content="A Twitter for My Sister" />
        <meta
          property="og:description"
          content="身長診断メーカー。いろんなモノであなたの身長をあらわす事が出来るサイトです。面白いモノで診断を作ってみたり、測定してみてください"
        />
        <meta
          property="og:image"
          content="https://shincyo-shindan.vercel.app/static/ogp.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
