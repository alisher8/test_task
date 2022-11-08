import React, { useState, useEffect } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const staticOptions = {
  chart: {
    type: 'line',
    styledMode: true,
    spacingRight: 25,
    spacingLeft: 20,
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    categories: [
      '2022-10-10',  
      '2022-10-11',  
      '2022-10-12',  
      '2022-10-13',  
      '2022-10-14',  
      '2022-10-15',  
      '2022-10-16',  
      '2022-10-17',  
      '2022-10-18',  
      '2022-10-19',  
      '2022-10-20',  
      '2022-10-21',  
      '2022-10-22',  
      '2022-10-23',  
      '2022-10-24',  
      '2022-10-25',
      '2022-10-26',
      '2022-10-27',
      '2022-10-28',  
      '2022-10-29',  
      '2022-10-30',  
      '2022-10-31',
      '2022-11-01',
      '2022-11-02',
      '2022-11-03',
      '2022-11-04',
      '2022-11-05',
      '2022-11-06',
      '2022-11-07',
      '2022-11-08',
    ],
    title: 'Date',
  },

  yAxis: {
    title: 'Price',
    gridLineColor: '#D0D0DA40',
  },

  legend: {
    align: 'center',
  },
  colors: ['#5251C9', '#FF93A8', '#AAFF00'],
  plotOptions: {
    line: {
      lineWidth: 1.5,
      text: 'Price',
      marker: {
        symbol: 'square',
      },
    },
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
};

const Line = ({ title, data }) => {
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions({
      ...staticOptions,
      title: {
        text: `Value comparison for Bitcoin for all time by day`,
        useHTML: true,
      },
      series: data,
    });
  }, [data, title]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Line;