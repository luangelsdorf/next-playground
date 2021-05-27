import '../public/css/global.css'
import Head from 'next/head'
import NavBar from "../src/components/NavBar";
import React from "react";
import SideBar from "../src/components/SideBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <SideBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp