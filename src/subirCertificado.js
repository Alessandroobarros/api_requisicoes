/* eslint-env es6 */
/* eslint-disable no-console */

const Axios = require('axios')
const FormData = require('form-data')
const env = require('../arquivos/config')


async function uploadCertificate({arquivo, senha}){
  try {
    const data = new FormData();
    data.append('arquivo', arquivo);
    data.append('senha', senha);

    const response = await Axios({
      url:`${env.Url}/certificado`,
      method: 'POST',
      data,
      headers: {
        'X-API-KEY': env.senha.API,
        ...data.getHeaders()
      },
    })
    return response.data
  } catch (error) {
      throw new Error(error)
  }
}
module.exports = uploadCertificate
