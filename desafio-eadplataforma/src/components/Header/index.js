import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import "./Header.scss";
import * as actions from "../../store/actions";
import { getSearchResults } from '../../Utils/Utils';

var _debounce = require('lodash/debounce');

// function handleSearchOnChange(searchValue) {
//     return {
//         type: 'SET_SEARCH',
//         searchValue
//     }
// }

let getSearchResultsDebounced = _debounce(getSearchResults, 250);
// let getSearchDebounced = _debounce(getSearch, 250);

function handleSearchOnChange(searchValue, dispatch) {
    dispatch(actions.set_search(searchValue));

    if(searchValue !== "") {
        dispatch(actions.set_users_list_loading());
        getSearchResultsDebounced(searchValue, dispatch);
    } else {

    }
}


const Header = ({ modules, dispatch }) => (
    <header className="header" style={{ background: '#fff', }}>
        <div className="search">
            {/* <input name="input-search" type="text" value={modules.searchValue} placeholder="Busque por clientes" onChange={(event) => dispatch(handleSearchOnChange(event.target.value))} /> */}
            <input name="input-search" type="text" value={modules.searchValue} placeholder="Busque por clientes" onChange={(event) => handleSearchOnChange(event.target.value, dispatch)} />
        </div>
        <Menu className="header-menu"
            mode="horizontal">
            <Menu.Item key="notification" className="notification">
            </Menu.Item>
            <Menu.Item key="user-avatar" className="user-avatar">
            </Menu.Item>
        </Menu>
    </header>
);

export default connect(state => ({ modules: state.searchValue }))(Header);