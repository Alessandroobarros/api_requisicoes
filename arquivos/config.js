/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
require('dotenv').config()

const env = process.env

module.exports = {
    Url: {
        PDF : env.URL_PDF,
        XML : env.URL_XML,
        CAD_EMPRESA: env.URL_CAD_EMPRESA,
        ENV_NOTA: env.URL_NOTA,
        SUB_CERTIFICADO: env.CERTIFICADO
    },
    senha: {
        API: env.SENHA_API,
        CERTIFICADO: env.CERTIFICADO_KEY
    },

};



