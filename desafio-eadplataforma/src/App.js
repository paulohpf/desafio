import React from 'react';
import { Provider } from 'react-redux';

import 'normalize.css';
import 'antd/dist/antd.css';
import './App.scss';

import { Layout } from 'antd';

import Header from './components/Header';
import Sider from './components/Sider';
import Dashboard from './components/Dashboard';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout className="container">
          <Sider />
          <Layout>
            <Header />
            <Layout.Content style={{ padding: '19px' }}>
              <Dashboard />
            </Layout.Content>
          </Layout>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;