export function update_users_list(usersList) {
    return {
        type: 'UPDATE_USERS_LIST',
        loading: false,
        data: usersList
    }
}

export function update_search_list(usersList) {
    return {
        type: 'UPDATE_SEARCH_LIST',
        loading: false,
        data: usersList
    }
}

export function set_users_list_loading(loading = true) {
    return {
        type: 'SET_USERS_LIST_LOADING',
        loading
    }
}

export function set_pagination(pagination) {
    console.log(pagination);
    return {
        type: 'SET_PAGINATION',
        pagination
    }
}

export function set_search(searchValue) {
    return {
        type: 'SET_SEARCH',
        searchValue
    }
}