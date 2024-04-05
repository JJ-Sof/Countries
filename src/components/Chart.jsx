import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function Chart({ countries }) {
  const data = countries.map(country => ({ name: country.name.common, population: country.population }));

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="population" fill="#8884d8" />
    </BarChart>
  );
}
export default Chart;