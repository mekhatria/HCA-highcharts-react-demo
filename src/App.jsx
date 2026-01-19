import React from 'react';
import { Chart, Title, Series } from '@highcharts/react';

const App = () => (
  <div>
    <Chart>
      <Title>My First Chart</Title>
      <Series type="line" data={[1, 2, 3]} />
      <Series type="area" data={[3, 2, 1]} />
    </Chart>
  </div>
);

export default App;