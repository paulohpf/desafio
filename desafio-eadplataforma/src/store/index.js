import { createStore } from 'redux';

const INITIAL_STATE = {
    searchValue: '',
    usersList: {
        totalUsers: 0,
        totalInadimplentes: 0,
        totalAdimplentes: 0,
        totalAmount: 0,
        pagination: {
            current: 1
        },
        users: [],
        loading: false
    }
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                searchValue: action.searchValue
            };
        case 'GET_DASHBOARD_DATA':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
                    totalUsers: action.data.totalUsers,
                    totalInadimplentes: action.data.totalInadimplentes,
                    totalAdimplentes: action.data.totalAdimplentes,
                    totalAmount: action.data.totalAmount,
                    users: action.data.users,
                    pagination: {
                        current: action.data.pagination.current
                    },
                    loading: action.loading
                }
            }
        case 'UPDATE_USERS_PAGINATED_LIST':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
                    users: action.users,
                    loading: action.loading,
                    pagination: {
                        current: action.pagination.current
                    }
                }
            }
        case 'UPDATE_SEARCH_LIST':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
                    loading: action.loading,
                    users: action.search
                }
            }
        case 'SET_USERS_LIST_LOADING':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
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