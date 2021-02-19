/* eslint-env es6 */
/* eslint-disable no-console */

const axios = require('axios');
const env = require('../arquivos/config');


async function downloadXml(id) {
    try {
        const url = env.Url;
        const response = await axios({
            url: `${url}/nfe/${id}/xml`,
            method: 'GET',
            headers: {
                'X-API-KEY': env.senha.API,
            },
            responseType: 'stream',
        });

        return response.data;
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = downloadXml
