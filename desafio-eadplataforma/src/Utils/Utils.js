import axios from "axios";
import * as actions from "../store/actions";

axios.defaults.baseURL = 'api/1';
axios.defaults.headers['Authorization'] = '123456789';

export function getData(dispatch) {
    return axios.get('users').then((response) => {
        dispatch(actions.update_users_list(response.data));
    }).catch(function (error) {
        console.error(error);
    });
}

export function getUsers(offset = null, pagination, dispatch) {
    const url = offset !== null ? `users?offset=${offset}` : 'users';

    dispatch(actions.set_users_list_loading());

    return axios.get(url).then((response) => {
        dispatch(actions.update_users_list(response.data, pagination));
    }).catch(function (error) {
        console.error(error);
    });
}

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
