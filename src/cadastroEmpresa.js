'use strict'

const axios = require("axios");
const data = require('../arquivos/dadosEmpresa.json');
require ('dotenv').config()


async function cadastroEmpresa() {
  const config = {
    method: 'post',
    url: (process.env.URL_CAD_EMPRESA),
    headers: {
      'X-API-KEY': (process.env.SENHA_API),
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      return console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      return console.log(error);
    });
}

cadastroEmpresa()  
