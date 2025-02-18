import React from 'react';
import { connect } from 'react-redux';
import './Userslist.scss';
import { Avatar, Table, Pagination } from 'antd';
import { getUsersPaginated } from '../../Utils/Utils';
import * as actions from "../../store/actions";

const UsersList = ({ usersList, searchValue, dispatch }) => {

    //Quantidade de itens por página 
    const INDEX_PAGE_SIZE_DEFAULT = 10

    //Colunas da Tabela
    const _columns = [
        {
            title: 'avatar',
            dataIndex: 'photo_url',
            key: 'avatar',
            render: avatar => (
                <Avatar src={avatar} />
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'amount',
            dataIndex: 'amount',
            key: 'amount',
            render: amount => (
                setAmount(amount)
            )
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
            render: status => (
                _validateStatus(status)
            )
        },
    ];

    //Configuro a exibição da moeda
    const setAmount = (amount) => {
        return <span>{`R$ ${amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</span>
    }

    //Validação de status Adimplente/Inadimplente
    const _validateStatus = (status) => {
        switch (status) {
            case "0":
                return <span>Adimplente</span>
            default:
                return <span className="red-11">Inadimplente</span>
        }
    }

    //Configuração do estilo da paginação
    const _setPaginationStyle = (current, type, originalElement) => {
        switch (type) {
            case "prev":
                return <a className="ant-pagination-item-link">Anterior</a>
            case "next":
                return <a className="ant-pagination-item-link">Próximo</a>
            default:
                return originalElement;
        }
    }

    const _handleOnChangePagination = async function (currentPage) {
        dispatch(actions.set_users_list_loading());
        const offset = ((INDEX_PAGE_SIZE_DEFAULT * currentPage) - INDEX_PAGE_SIZE_DEFAULT);
        let response = await getUsersPaginated(offset, currentPage, dispatch);
        dispatch(actions.update_users_paginated_list({ ...response, currentPage: currentPage }));
    }

    return <div className={`usersList ${searchValue !== '' ? 'search-result' : ''}`}>
        {//Mensagem com contador de resultados
            searchValue !== "" && usersList.loading === false ? <span className="search-found-message">Foram encontrados <b>{usersList.users.length} resultados</b></span> : null
        }
        <Table
            dataSource={usersList.users}
            columns={_columns}
            rowKey="id"
            loading={{
                spinning: usersList.loading,
                tip: "Buscando",
                indicator: <span className="loading_spin"></span>
            }}
            pagination={{
                pageSize: INDEX_PAGE_SIZE_DEFAULT,
                showHeader: false,
                disabled: true
            }}
        />
        <Pagination
            className="ant-table-pagination"
            pageSize={INDEX_PAGE_SIZE_DEFAULT}
            total={usersList.totalUsers}
            itemRender={(current, type, originalElement) =>
                _setPaginationStyle(current, type, originalElement)
            }
            current={parseInt(usersList.pagination.current)}
            onChange={(page) => { _handleOnChangePagination(page) }}
        />
    </div>
}

export default connect(state => ({
    usersList: state.usersList,
    searchValue: state.searchValue
}))(UsersList);