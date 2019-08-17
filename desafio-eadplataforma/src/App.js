import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { getData } from './Utils/Utils';
import * as actions from "./store/actions";

import 'normalize.css';
import 'antd/dist/antd.css';
import './App.scss';

import { Layout } from 'antd';

import Header from './components/Header';
import Sider from './components/Sider';
import Dashboard from './components/Dashboard';
import store from './store';


const { Content } = Layout;

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await getData();

      store.dispatch(actions.get_dashboard_data(response));
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <Layout className="container">
          <Sider />
          <Layout>
            <Header />
            <Content style={{ padding: '19px' }}>
              <Dashboard />
            </Content>
          </Layout>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;