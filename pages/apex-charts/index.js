import React from 'react';
import Graph from "../../src/components/ApexChart";
import Head from 'next/head';

export default function ApexCharts() {
  return (
    <>
      <Head>
        <title>Apex Charts</title>
        <link rel="stylesheet" href="/css/apex-charts.css"/>
      </Head>

      <div>
        <h1>Graph</h1>
        <Graph/>
      </div>
    </>
  )
}