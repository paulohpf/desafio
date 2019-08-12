import React from 'react';
import { Menu } from 'antd';
// import { Layout } from 'antd';
import { connect } from 'react-redux';
import "./Header.scss";

function handleSearchOnChange(searchValue) {
    return {
        type: 'SET_SEARCH',
        searchValue
    }
}

const Header = ({ modules, dispatch }) => (
    <header className="header" style={{ background: '#fff', padding: 0 }} >
        <div key="logo" className="logo" />
        <Menu
            theme="light"
            mode="horizontal"
            className="header-menu"
        >
            <Menu.Item key="search" className="search"
                disabled="true">
                <form>
                    <input name="input-search" type="text" value={modules.searchValue} placeholder="Busque por clientes" onChange={(event) => dispatch(handleSearchOnChange(event.target.value))} />
                </form>
            </Menu.Item>
            <Menu.ItemGroup className="user-group">
                <Menu.Item key="notification" className="notification">
                </Menu.Item>
                <Menu.Item key="user-avatar" className="user-avatar">
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    </header>
);

export default connect(state => ({ modules: state.searchValue }))(Header);