/* eslint-env es6 */
/* eslint-disable no-console */

const Fs = require('fs');
const Path = require('path');
const axios = require('axios');
const env = require('../arquivos/config');

async function downloadPdf() {
    try {
        const url = env.Url.PDF;
        const path = Path.resolve(__dirname, '../dowloads', 'nota.pdf');
        const writer = Fs.createWriteStream(path);

        const response = await axios({
            url,
            method: 'GET',
            headers: {
                'X-API-KEY': env.senha.API,
            },
            responseType: 'stream',
        });

        return response.data.pipe(writer);
    } catch (error) {
        return console.log(error);
    }
}
downloadPdf();
