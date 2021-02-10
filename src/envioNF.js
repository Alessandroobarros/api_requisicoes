/* eslint-env es6 */
/* eslint-disable no-console */

const axios = require('axios'); /* importação do axios para fazer requisiões */
const data = require('../arquivos/dadosNota.json'); /* importação do arquivo com os dados da nota */
const env = require('../arquivos/config') /* importação do arquivo config */

async function envioNotas() {
    const config = {
        method: 'post',
        url: env.Url.ENV_NOTA, /* variavel externa do arquivo config */
        headers: {
            'X-API-KEY': env.senha.senha, /* variavel externa do arquivo config */
            'Content-Type': 'application/json',
        },
        data, /* data reduzida */
    };

    axios(config)
        .then( (response) =>{
             console.log(JSON.stringify(response.data));
        })
        .catch( (error) =>{
             console.log(error);
        });
}

envioNotas();
