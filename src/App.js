import './App.css';
import LineChart from './charts/Chart';
import { CubeProvider } from '@cubejs-client/react';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import Dashboard from './charts/Dashboard';

const cubejsApi = cubejs(
  '***',
  {
  apiUrl: 'http://localhost:4000/cubejs-api/v1'
});

const AppLayout = () => (
  <Layout>
    <Layout.Content className='examples__container'>
      <Dashboard />
    </Layout.Content>
  </Layout>
);

const App = () => (
  <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout></AppLayout>
  </CubeProvider>
);

export default App;
