import React, { useEffect } from 'react';
import { Menu, Avatar } from 'antd';
import { connect } from 'react-redux';
import "./Header.scss";
import * as actions from "../../store/actions";
import { getData, getSearchResults, getProfileData } from '../../Utils/Utils';

var _debounce = require('lodash/debounce');

//Função debounced
const getSearchResultsDebounced = _debounce(_getSearchResults, 500);

//Recebo os resultados da busca
async function _getSearchResults(searchValue, dispatch) {
    dispatch(actions.set_users_list_loading());
    let response = await getSearchResults(searchValue, dispatch);
    dispatch(actions.update_search_list(response))
}

const Header = ({ modules, dispatch }) => {
    useEffect(() => {
        async function fetchData() {
            _getProfileData(dispatch);
        }
        fetchData();
    }, [dispatch])

    function _handleSearchOnChange(searchValue) {
        dispatch(actions.set_search(searchValue));

        if (searchValue !== "") {
            dispatch(actions.set_users_list_loading());
            getSearchResultsDebounced(searchValue, dispatch);
        } else {
            _getUsersData();
        }
    }

    //Recebimento da lista de usuários padrão
    async function _getUsersData() {
        dispatch(actions.set_users_list_loading());
        let response = await getData();
        dispatch(actions.get_dashboard_data(response));
    }

    //Dados do perfil
    async function _getProfileData() {
        let response = await getProfileData(1);
        dispatch(actions.set_profile(response));
    }

    return <header className="header" style={{ background: '#fff', }}>
        <div className="search">
            <input name="input-search" type="text" value={modules.searchValue} placeholder="Busque por clientes" onChange={(event) => _handleSearchOnChange(event.target.value)} />
        </div>
        <Menu className="header-menu"
            mode="horizontal">
            <Menu.Item key="notification" className="notification">
            </Menu.Item>
            <Menu.Item key="user-avatar" className="user-avatar">
                <Avatar size="large" icon="user" src={modules.profile.photo_url} />
            </Menu.Item>
        </Menu>
    </header>
};

export default connect(state => ({
    modules: {
        search: state.searchValue,
        profile: state.profile
    }
}))(Header);