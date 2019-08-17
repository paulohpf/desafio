import React from 'react';
import { connect } from 'react-redux';
import './Overview.scss';

const Overview = ({ usersList, dispatch }) => (
    <div className="overview">
        {/* {JSON.stringify(usersList)} */}
        <h2>Visão geral</h2>
        <div className="data">
            <div>
                <h3>Total de clientes</h3>
                <span className="value">{usersList.totalUsers}</span>
            </div>
            <div>
                <h3>Clientes inadimplentes</h3>
                <span className="value">{usersList.totalInadimplentes}</span>
            </div>
            <div>
                <h3>Clientes adimplentes</h3>
                <span className="value">{usersList.totalAdimplentes}</span>
            </div>
            <div>
                <h3>Total arrecadado</h3>
                <span className="value">{usersList.totalAmount}</span>
            </div>
        </div>
    </div>
)

export default connect(state => ({
    usersList: state.usersList
}))(Overview);