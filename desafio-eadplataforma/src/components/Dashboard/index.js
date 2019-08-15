import React from 'react';
import { connect } from 'react-redux';
import Overview from '../Overview/Overview';
import UsersList from '../UsersList';

const Dashboard = ({ modules, dispatch }) => (
    <div className="dashboard">
        {/* {JSON.stringify(modules)} */}
        {modules.searchValue === "" ? (
            <div>
                <Overview />
                <h2>Clientes Cadastrados</h2>
                <UsersList />
            </div>
        ) : (
                <UsersList />
            )

        }
    </div>
)

export default connect(state => ({ modules: state }))(Dashboard);