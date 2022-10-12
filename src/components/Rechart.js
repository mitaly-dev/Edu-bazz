import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid ,PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Rechart = () => {
    let [data,setData] = useState([])
        useEffect(()=>{
            let res= axios.get('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res2=>setData(res2.data))
        },[])

    
    return (
       <div className='flex justify-between py-10 px-28'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="investment"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#88878"
            label
          />
          {/* <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="investment" fill="#853448" background={{ fill: '#eee' }} />
        </BarChart>
       </div>
    );
};

export default Rechart;