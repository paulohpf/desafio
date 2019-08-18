import React from 'react';
import { connect } from 'react-redux';
import './dashboard.scss';
import Overview from '../Overview/Overview';
import UsersList from '../UsersList';

const Dashboard = ({ modules, dispatch }) => (
    <div className="dashboard">
        {modules.searchValue === "" ? (
            <>
                <h2>Visão geral</h2>
                <Overview />
                <h2>Clientes Cadastrados</h2>
                <UsersList />
            </>
        ) : (
                <UsersList />
            )
        }
    </div>
)

export default connect(state => ({ modules: state }))(Dashboard);