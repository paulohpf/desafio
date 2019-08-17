import axios from "axios";
import * as actions from "../store/actions";

axios.defaults.baseURL = 'api/1';
axios.defaults.headers['Authorization'] = '123456789';

export async function getData() {

    //Retorna o valor de usuários Inadimplentes
    const calcInadimplentes = (users) => {

        let inadimplentesUsersFiltered = users.filter(function (value) {
            return value.status === "1";
        })

        return inadimplentesUsersFiltered.length;
    }

    //Retorna o valor de usuários Adimplentes
    const calcAdimplentes = (users) => {

        let adimplentesUsersFiltered = users.filter(function (value) {
            return value.status === "0";
        })

        return adimplentesUsersFiltered.length;
    }

    //Retorna o valor total arrecadado
    const calcAmount = (users) => {

        let amountUsersTotal = 0;

        users.map((user) => {
            amountUsersTotal += parseFloat(user.amount);
            return true
        });

        //Retorno o valor formatado para Reais
        return `${amountUsersTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }


    let response = await axios.get('users').catch(function (error) {
        console.error(error);
    });

    let responseObj = {
        totalUsers: response.data.total,
        totalInadimplentes: calcInadimplentes(response.data.users),
        totalAdimplentes: calcAdimplentes(response.data.users),
        totalAmount: calcAmount(response.data.users),
        users: response.data.users
    }

    return responseObj;
}

// export function getData(dispatch) {
//     return axios.get('users').then((response) => {
//         dispatch(actions.update_users_list(response.data));
//     }).catch(function (error) {
//         console.error(error);
//     });
// }

// export function getUsersPaginated(offset = null, pagination, dispatch) {
//     const url = offset !== null ? `users?offset=${offset}` : 'users';

//     dispatch(actions.set_users_list_loading());

//     return axios.get(url).then((response) => {
//         dispatch(actions.update_users_paginated_list(response.data, pagination));
//     }).catch(function (error) {
//         console.error(error);
//     });
// }

export async function getUsersPaginated(offset = null, pagination, dispatch) {
    const url = offset !== null ? `users?offset=${offset}` : 'users';

    let response = await axios.get(url).catch(function (error) {
        console.error(error);
    });

    let responseObj = {
        users: response.data.users
    }

    return responseObj;
}

/*
TODO
Alterar para o novo formato no Redux
*/

export function getSearchResults(searchValue = null, dispatch) {
    const url = `search?q=${searchValue}`;

    return axios.get(url).then((response) => {
        if (response.data !== '0 records found!') {
            dispatch(actions.update_search_list(response.data.search))
        } else {
            dispatch(actions.update_search_list([]))
        }
    }).catch(function (error) {
        console.error(error);
    });
}
