/* eslint-env es6 */
/* eslint-disable no-console */
// 'use strict'

const axios = require("axios");
const data = require('../arquivos/dadosNota.json');
require('dotenv').config();

async function envioNotas() {
  const config = {
    method: 'post',
    url: (process.env.URL_NOTA),
    headers: {
      'X-API-KEY': (process.env.SENHA_API),
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  envioNotas()
