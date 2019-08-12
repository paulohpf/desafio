import React from 'react';
import * as Utils from '../../Utils/Utils';
import { connect } from 'react-redux';

const Overview = ({ modules, dispatch }) => (
    <div className="overview">
        {JSON.stringify(modules)}
        <h2>Visão geral</h2>
    </div>
)

export default connect(state => ({ modules: state.searchValue }))(Overview);