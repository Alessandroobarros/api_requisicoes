/* eslint-env es6 */
/* eslint-disable no-console */

const axios = require('axios');
const data = require('../arquivos/dadosEmpresa.json');
const env = require('../arquivos/config');

async function cadastroEmpresa() {
    try {
        const response = await axios({
            method: 'post',
            url: env.Url.CAD_EMPRESA,
            headers: {
                'X-API-KEY': env.senha.API,
                'Content-Type': 'application/json',
            },
            data,
        });

        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        return console.log(error);
    }
}

cadastroEmpresa();
