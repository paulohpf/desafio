import React from 'react';
import { connect } from 'react-redux';
import './Userslist.scss';
import { Avatar, Table, Pagination } from 'antd';
import * as Utils from '../../Utils/Utils';
import * as actions from "../../store/actions";

/*
    TODO: Instalar lodash para carregamento do Axios
*/

//Quantidade de itens por página 
const INDEX_PAGE_SIZE_DEFAULT = 7
const columns = [
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
    },
    {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
        render: status => (
            validateStatus(status)
        )
    },
];

const validateStatus = (status) => {
    switch (status) {
        case "0":
            return <span>Adimplente</span>
        default:
            return <span className="red-11">Inadimplente</span>
    }
}

// let pagination = { pageSize: 7, total: 15, showHeader: false, current: 1 };

const UsersList = ({ usersList, searchValue, dispatch }) => (
    <div className="usersList">
        {searchValue === '' ? <h2>Clientes Cadastrados</h2> : ''}
        <Table
            dataSource={usersList.data.users}
            columns={columns}
            rowKey="id"
            loading={usersList.loading}
            pagination={{
                pageSize: INDEX_PAGE_SIZE_DEFAULT,
                showHeader: false,
                disabled: true
            }}
        />
        <Pagination
            className="ant-table-pagination"
            pageSize={INDEX_PAGE_SIZE_DEFAULT}
            total={usersList.data.total}
            onChange={(currentPage) => {
                dispatch(actions.set_users_list_loading());
                const offset = ((INDEX_PAGE_SIZE_DEFAULT * currentPage) - INDEX_PAGE_SIZE_DEFAULT);
                console.log('offset:' + offset);
                Utils.getUsers(offset, currentPage, dispatch);
            }}
        />
        {JSON.stringify(usersList)}
    </div>
)

export default connect(state => ({ usersList: state.usersList, searchValue: state.searchValue }))(UsersList);