/* eslint-env es6 */
/* eslint-disable no-console */

const Fs = require('fs'); /* importação do modulo file system para trabalhar com arquivos */
const Path = require('path'); /* importação do modulo Path para usar diretorios e caminhos */
const Axios = require('axios'); /* importação do axios para fazer requisiões */
const config = require('../arquivos/config') /* importação do arquivo config */

async function downloadXml() {
    const url = config.Url.XML /* variavel externa do arquivo config */
    const path = Path.resolve(__dirname, '../dowloads', 'nota.xml'); /* caminho do diretorio para dowload */
    const writer = Fs.createWriteStream(path);

    const configure = ({
        url,
        method: 'GET',
        headers: {
            'X-API-KEY': config.senha.senha /* variavel externa do arquivo config */
        },
        responseType: 'stream',
    })


    Axios(configure)
    .then( (response) =>{
        response.data.pipe(writer)
      })
      .catch( (error) => {
        console.log(error);
      });
}

downloadXml();
