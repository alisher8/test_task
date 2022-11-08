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
      '2022-10-31',
      '2022-11-01',
      '2022-11-02',
      '2022-11-03',
      '2022-11-04',
      '2022-11-05',
      '2022-11-06',
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

const LineSevenDays = ({ title, data }) => {
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions({
      ...staticOptions,
      title: {
        text: `Value comparison for the last week`,
        useHTML: true,
      },
      series: data,
    });
  }, [data, title]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineSevenDays;