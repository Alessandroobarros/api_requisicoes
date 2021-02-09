/* eslint-env es6 */
/* eslint-disable no-console */
// 'use strict'

const Fs = require('fs') /* importação do modulo file system para trabalhar com arquivos */
const Path = require('path') /* importação do modulo Path para usar diretorios e caminhos */
const Axios = require('axios') /* importação do axios para fazer requisiões */
const FormData = require('form-data') /* importação do formData */
const config = require('../arquivos/config') /* importação do arquivo config */



async function uploadCertificate(){
  try {
    const url = config.Url.SUB_CERTIFICADO; /* variavel externa do arquivo config */
    const data = new FormData(); /* criação do objeto vazio */
    const path = Path.resolve(__dirname,'../arquivos', 'certificadoPEM.pfx') /* caminho do diretorio para puxar arquivo */

    data.append('arquivo', Fs.createReadStream(path));
    data.append('senha', (config.senha.senha)); /* variavel externa do arquivo config */

    const response = await Axios({
      url,
      method: 'POST',
      data,
      headers: {
        'X-API-KEY': config.senha.senha, /* variavel externa do arquivo config */
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
