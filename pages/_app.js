import '../public/css/global.css'
import Head from 'next/head'
import NavBar from "../src/components/NavBar";
import React from "react";
import SideBar from "../src/components/SideBar";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  let router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Renderizar a navegação somente em páginas que não são a página índice */}
      { router.route === '/' ? null : <><NavBar /><SideBar /></> }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp