import React from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import "./Header.scss";

function handleSearchOnChange(searchValue) {
    return {
        type: 'SET_SEARCH',
        searchValue
    }
}

const Header = ({ modules, dispatch }) => (
    <header className="header" style={{ background: '#fff', }}>
        <div className="search">
            <input name="input-search" type="text" value={modules.searchValue} placeholder="Busque por clientes" onChange={(event) => dispatch(handleSearchOnChange(event.target.value))} />
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