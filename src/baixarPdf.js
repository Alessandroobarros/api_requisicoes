'use strict';

const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');
require ('dotenv').config()


async function downloadPdf() {
  const url = (process.env.URL_PDF)
  const path = Path.resolve(__dirname, '../dowloads', 'nota.pdf')
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    method: 'GET',
    headers: {
      'X-API-KEY': (process.env.SENHA_API)
    },
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}
downloadPdf()  