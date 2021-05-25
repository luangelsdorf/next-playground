import React from 'react';
import ButtonIcon from "../../src/components/ButtonIcon";
import Head from "next/head";
import {useEffect} from "react";

export default function testComponents() {

  useEffect(() => {

  }, [])

  return (
    <>
      <Head>
        <title>Components</title>
      </Head>

      <div className="container p-3">
        <ButtonIcon icon="shopping_cart">ADD TO CART</ButtonIcon>
      </div>
    </>
  )
}