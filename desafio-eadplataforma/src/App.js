import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Utils from './Utils/Utils';

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
    Utils.getData(store.dispatch)
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <Layout className="container">
          <Header />
          <Layout>
            <Sider />
            <Content style={{ padding: '24px' }}>
              <Dashboard />
            </Content>
          </Layout>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;