import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import "./Header.scss";
import * as actions from "../../store/actions";
import { getData, getSearchResults } from '../../Utils/Utils';

var _debounce = require('lodash/debounce');

let _getSearchResultsDebounced = _debounce(_getSearchResults, 500);

function _handleSearchOnChange(searchValue, dispatch) {
    dispatch(actions.set_search(searchValue));

    if (searchValue !== "") {
        dispatch(actions.set_users_list_loading());
        _getSearchResultsDebounced(searchValue, dispatch);
    } else {
        _getUsersData(dispatch);
    }
}

async function _getSearchResults(searchValue, dispatch) {
    dispatch(actions.set_users_list_loading());
    let response = await getSearchResults(searchValue, dispatch);
    dispatch(actions.update_search_list(response))
}

async function _getUsersData(dispatch) {
    dispatch(actions.set_users_list_loading());
    let response = await getData();
    dispatch(actions.get_dashboard_data(response));
}


const Header = ({ modules, dispatch }) => (
    <header className="header" style={{ background: '#fff', }}>
        <div className="search">
            {/* <input name="input-search" type="text" value={modules.searchValue} placeholder="Busque por clientes" onChange={(event) => dispatch(handleSearchOnChange(event.target.value))} /> */}
            <input name="input-search" type="text" value={modules.searchValue} placeholder="Busque por clientes" onChange={(event) => _handleSearchOnChange(event.target.value, dispatch)} />
        </div>
        <Menu className="header-menu"
            mode="horizontal">
            <Menu.Item key="notification" className="notification">
            </Menu.Item>
            {/*
            TODO
            	Topo: Deverá trazer a foto de perfil de um usuário do endpoint GET /api/1/profile/:id
             */}
            <Menu.Item key="user-avatar" className="user-avatar">
            </Menu.Item>
        </Menu>
    </header>
);

export default connect(state => ({ modules: state.searchValue }))(Header);