import axios from 'axios';
import { Config } from '../Config';

const userApiClientBase = () =>
    axios.create({
        baseURL: Config.BASE_URL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 3000,
    });

function newDebt(payload) {
    return userApiClientBase()
        .post('/v1/debt/new', payload)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
}

function getAllDebt(payload) {
    return userApiClientBase()
        .get('/v1/debt/All/' + payload)
        .then(response => {

            return response;
        })
        .catch(function (error) {
            return error.response;
        });
}

function removeDebt(payload) {

    return userApiClientBase()
        .delete('/v1/debt/delete/' + payload.id, payload.budget)
        .then(response => {

            return response;
        })
        .catch(function (error) {
            return error.response;
        });
}



export const DebtService = {
    newDebt,
    getAllDebt,
    removeDebt


};