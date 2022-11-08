import React, { useState, useEffect } from 'react';
import { useCubeQuery } from '@cubejs-client/react';

import LineFourDays from './LineFourDays';

const LineChartFourDays = () => {
  const [data, setData] = useState([]);

  const { resultSet: result } = useCubeQuery({
    measures: ['Cryptoinfos.beginPrice',
    "Cryptoinfos.endPrice",
    "Cryptoinfos.maxPrice"],
    timeDimensions: [
      {
        dimension: "Cryptoinfos.date",
        granularity: "day",
        dateRange: [
            "2022-11-05",
            "2022-11-08"
          ]
      },
    ],
  });

  useEffect(() => {
    if (result) {
      const temp = result.series().map((data) => {
        return {
          name: data.key.substring(0, 4),
          data: data.series.map((item) => item.value),
        };
      });
      setData(temp);
    }
  }, [result]);

  return <LineFourDays data={data} title={'the single query'} />;
};

export default LineChartFourDays