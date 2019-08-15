import React from 'react';
import { connect } from 'react-redux';
import './Overview.scss';

const Overview = ({ usersList, dispatch }) => (
    <div className="overview">
        <h2>Visão geral</h2>
        <div className="data">
            <div>
                <h3>Total de clientes</h3>
                <span className="value">{usersList.total}</span>
            </div>
            <div>
                <h3>Clientes inadimplentes
                    
                </h3>
            </div>
            <div>
                <h3>Clientes adimplentes</h3>
            </div>
            <div>
                <h3>Total arrecadado</h3>
            </div>
        </div>
    </div>
)

export default connect(state => ({
    usersList: state.usersList.data
}))(Overview);