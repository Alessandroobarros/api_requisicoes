/* eslint-env es6 */
/* eslint-disable no-console */

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const FormData = require('form-data')
const config = require('../arquivos/config')


async function uploadCertificate(){
  try {
    const url = config.Url.SUB_CERTIFICADO;
    const data = new FormData();
    const path = Path.resolve(__dirname,'../arquivos', 'certificadoPEM.pfx')

    data.append('arquivo', Fs.createReadStream(path));
    data.append('senha', (config.senha.CERTIFICADO));

    const response = await Axios({
      url,
      method: 'POST',
      data,
      headers: {
        'X-API-KEY': config.senha.API,
        ...data.getHeaders()
      },
    })
    console.log(JSON.stringify(response.data))

    return response.data
  } catch (error) {
    return console.error(error)
  }
}

uploadCertificate()
