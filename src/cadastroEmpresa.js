/* eslint-env es6 */
/* eslint-disable no-console */

const axios = require('axios');
const env = require('../arquivos/config');


async function cadastroEmpresa(data) {
    try {
        const url = env.Url;
        const response = await axios({
            method: 'post',
            url: `${url}/empresa`,
            headers: {
                'X-API-KEY': env.senha.API,
                'Content-Type': 'application/json',
            },
            data,
        });

        return response.data;
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = cadastroEmpresa
