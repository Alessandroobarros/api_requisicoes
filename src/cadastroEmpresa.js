/* eslint-env es6 */
/* eslint-disable no-console */

const axios = require("axios"); /* importação do axios para fazer requisiões */
const data = require('../arquivos/dadosEmpresa.json'); /* importação do arquivo com os dados de cadastro */
const env = require('../arquivos/config') /* importação do arquivo config */


async function cadastroEmpresa() {
  const config = {
    method: 'post',
    url: env.cadastroEmpresa, /* variavel externa do arquivo config */
    headers: {
      'X-API-KEY': env.senha.senha,  /* variavel externa do arquivo config */
      'Content-Type': 'application/json'
    },
    data, /* data reduzida */
  };

  axios(config)
    .then( (response) =>{
      console.log(JSON.stringify(response.data))
    })
    .catch( (error) => {
      console.log(error);
    });
}

cadastroEmpresa()
