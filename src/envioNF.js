/* eslint-env es6 */
/* eslint-disable no-console */

const axios = require('axios');
const data = require('../arquivos/dadosNota.json');
const env = require('../arquivos/config');

async function envioNotas() {
    try {
        const response = await axios({
            method: 'post',
            url: env.Url.ENV_NOTA,
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

envioNotas();
