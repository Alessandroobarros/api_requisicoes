/* eslint-env es6 */
/* eslint-disable no-console */

const Fs = require('fs');
const Path = require('path');
const axios = require('axios');
const env = require('../arquivos/config');


async function downloadXml() {
    try {
        const url = env.Url.XML;
        const path = Path.resolve(__dirname, '../dowloads', 'nota.xml');
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

downloadXml();
