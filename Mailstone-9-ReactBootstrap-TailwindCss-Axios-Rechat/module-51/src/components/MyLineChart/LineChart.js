import React from 'react';
import { Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const data = [
        {
          name: 'supplier A',
          price: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'supplier B',
          price: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'supplier C',
          price: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'supplier D',
          price: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'supplier E',
          price: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'supplier F',
          price: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'supplier G',
          price: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <h2>Simple Line Chart</h2>

            <LineChart width={400} height={500} data={data}>
                <Line dataKey={'price'}> </Line>
                <XAxis dataKey={'price'}></XAxis>
                <YAxis></YAxis>


            </LineChart>
        </div>
    );
};

export default LineChart;