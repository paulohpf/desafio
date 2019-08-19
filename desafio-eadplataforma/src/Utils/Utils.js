import axios from "axios";

axios.defaults.baseURL = 'api/1';
axios.defaults.headers['Authorization'] = '123456789';

//Recebo os dados de todos os usuários
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

        let amountUsersTotal = 0.00;

        users.map((user) => {
            if (user.status === "0") {
                amountUsersTotal = amountUsersTotal + parseFloat(user.amount);
            }
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
        users: response.data.users,
        pagination: {
            current: 1
        }
    }

    return responseObj;
}

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

export async function getSearchResults(searchValue = null, dispatch) {
    const url = `search?q=${searchValue}`;

    let response = await axios.get(url).catch(function (error) {
        console.error(error);
    });

    console.log(response);

    //Por conta do servidor estar respondendo a uma String com chaves "{msg: "0 records found!"}" ao invés de um Objeto precisei realizar a validação com chaves na String
    let responseObj = {
        search: response.data !== '{msg: "0 records found!"}' ? response.data.search : []
    }

    return responseObj;
}

export async function getProfileData(profileID) {
    const url = `profile/${profileID}`;

    let response = await axios.get(url).catch(function (error) {
        console.error(error);
    });

    let responseObj = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        photo_url: response.data.photo_url
    }

    return responseObj;
}