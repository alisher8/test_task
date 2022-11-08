import React, { useState, useEffect } from 'react';
import { useCubeQuery } from '@cubejs-client/react';

import LineSevenDays from './LineSevenDays';

const LineChartSevenDays = () => {
  const [data, setData] = useState([]);

  const { resultSet: result } = useCubeQuery({
    measures: ['Cryptoinfos.beginPrice',
    "Cryptoinfos.endPrice",
    "Cryptoinfos.maxPrice"],
    timeDimensions: [
      {
        dimension: "Cryptoinfos.date",
        granularity: "day",
        dateRange: "Last week",
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

  return <LineSevenDays data={data} title={'the single query'} />;
};

export default LineChartSevenDays