import React, { useState, useEffect } from 'react';
import { useCubeQuery } from '@cubejs-client/react';

import Line from './Line';

const LineChart = () => {
  const [data, setData] = useState([]);

  const { resultSet: result } = useCubeQuery({
    measures: ['Cryptoinfos.beginPrice',
    "Cryptoinfos.endPrice",
    "Cryptoinfos.maxPrice"],
    timeDimensions: [
      {
        dimension: "Cryptoinfos.date",
        granularity: "day",
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

  return <Line data={data} title={'the single query'} />;
};

export default LineChart