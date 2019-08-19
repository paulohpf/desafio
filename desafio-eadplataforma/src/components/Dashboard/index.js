import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './dashboard.scss';
import Overview from '../Overview/Overview';
import UsersList from '../UsersList';
import { getData } from '../../Utils/Utils';
import * as actions from "../../store/actions";

const Dashboard = ({ modules, dispatch }) => {
    useEffect(() => {
        async function fetchData() {
          const response = await getData();
    
          dispatch(actions.get_dashboard_data(response));
        }
    
        fetchData();
      }, [dispatch]);
    
    return <div className="dashboard">
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
}

export default connect(state => ({ modules: state }))(Dashboard);