// @flow

import React from 'react';
import { LineChart } from 'react-chartkick';

import './styles.scss';

const Chart = ({
  data,
}: {
  data: Object,
}) => (
  <div className="chart-container">
    <p>GOLD</p>
    <LineChart
      height={320}
      suffix="K"
      legend={false}
      data={data}
    />
  </div>
);

export default Chart;
