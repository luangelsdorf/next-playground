import React from 'react';
import styles from './VictoryChart.module.css';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine} from 'victory';

export default function VictoryGraph() {

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];

  return (
    <div className={styles.root}>
      <h1>Victory Tutorial</h1>
      <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={data.map(m => `Quarter ${m.quarter}`)}/>
        <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>

        <VictoryLine
          data={data}
          x={"quarter"}
          y={"earnings"}
        />
      </VictoryChart>
    </div>
  )
}