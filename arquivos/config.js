/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
require('dotenv').config()

const env = process.env

module.exports = {
    Url: env.URL_API,
    senha: {
        API: env.SENHA_API,
        CERTIFICADO: env.CERTIFICADO_KEY
    },
};



