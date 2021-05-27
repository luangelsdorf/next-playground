import React from 'react';
import ButtonIcon from "../../src/components/ButtonIcon";
import Head from "next/head";
import {useEffect} from "react";
import NavBar from "../../src/components/NavBar";
import SideBar from "../../src/components/SideBar";

export default function testComponents() {

  useEffect(() => {

  }, [])

  return (
    <>
      <Head>
        <title>Components</title>
      </Head>

      <NavBar />
      <SideBar />

      <div className="container">
        <div>asdasdasd</div>
      </div>
    </>
  )
}