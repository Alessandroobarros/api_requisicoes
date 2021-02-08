/* eslint-env es6 */
/* eslint-disable no-console */
// 'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const FormData = require('form-data')
require ('dotenv').config()


async function uploadCertificate(){
  try {
    const url = (process.env.CERTIFICADO)
    const data = new FormData();
    const path = Path.resolve(__dirname,'../arquivos', 'certificadoPEM.pfx')

    data.append('arquivo', Fs.createReadStream(path));
    data.append('senha', (process.env.CERTIFICADO_KEY));

    const response = await Axios({
      url,
      method: 'POST',
      data,
      headers: {
        'X-API-KEY': (process.env.SENHA_API),
        ...data.getHeaders()
      },
    })

    console.log(JSON.stringify(response.status))
    console.log(JSON.stringify(response.data))

    return response.data
  } catch (error) {
    return console.error(error)
  }
}

uploadCertificate()
