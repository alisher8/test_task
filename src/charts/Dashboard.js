import React from 'react';
import { Row, Col } from 'antd';
import LineChart from './Chart';
import LineChartSevenDays from './ChartSevenDays';
import LineChartFourDays from './ChartFourDays';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Row gutter={20} className='dashboard__row'>
        <Col sm={24} lg={12}>
          <div className='dashboard__cell'>
            <LineChart />
            <LineChartFourDays />
            <LineChartSevenDays />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;

