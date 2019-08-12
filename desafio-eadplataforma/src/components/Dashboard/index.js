import React from 'react';
import { connect } from 'react-redux';
import Overview from '../Overview/Overview';
import UsersList from '../UsersList';

const Dashboard = ({ modules, dispatch }) => (
    <div className="dashboard">
        <Overview />
        <UsersList />
    </div>
)

export default connect(state => ({ modules: state }))(Dashboard);