import { createStore } from 'redux';

const INITIAL_STATE = {
    searchValue: '',
    usersList: {
        loading: false,
        pagination: {
            current: 1
        },
        data: {},
        dataSearch: {}
    }
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                searchValue: action.searchValue
            };
        case 'UPDATE_USERS_LIST':
            return {
                ...state,
                usersList: {
                    // pagination: action.pagination,
                    data: action.data,
                    loading: action.loading
                }
            }
        case 'UPDATE_SEARCH_LIST':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
                    loading: action.loading,
                    dataSearch: action.data
                }
            }
        case 'SET_USERS_LIST_LOADING':
            return {
                ...state,
                usersList: {
                    // pagination: {...state.usersList.pagination},
                    data: { ...state.usersList.data },
                    loading: action.loading
                }
            }
        case 'SET_PAGINATION':
            return {
                ...state,
                usersList: {
                    data: { ...state.usersList.data },
                    loading: { ...state.usersList.loading },
                    // pagination: action.pagination
                }
            }


        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;