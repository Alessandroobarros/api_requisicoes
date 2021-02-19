// const Path = require ('path')
// const Fs = require('fs')
// const dowloadPdf = require ('./baixarPdf')
// const dowXml = require ('./baixarXml')
// const cadEmpresa = require('./cadastroEmpresa')
// const nf = require('./envioNF')
// const cadCert = require('./subirCertificado')


// async function main() {
//     const pdf = await dowloadPdf("601303037df2233b1a57b4b7")
//     const path = Path.resolve(__dirname, '../dowloads', 'nota.pdf');
//     const writer = Fs.createWriteStream(path);
//     return pdf.pipe(writer);
// }

// main()



// async function main(){

//     const xml = await dowXml(`601303037df2233b1a57b4b7`);
//     const path = Path.resolve(__dirname, '../dowloads', 'nota.xml');
//     const writer = Fs.createWriteStream(path);

//     return xml.pipe(writer)
// }

// main()

// async function main(){
//     const empresa = await cadEmpresa(
//     {
//         "cpfCnpj": "20717372000140",
//         "inscricaoMunicipal": "1111111111",
//         "inscricaoEstadual": "2222222222",
//         "razaoSocial": "Teste axios cadastro Empresa",
//         "nomeFantasia": "Teste01",
//         "certificado": "5af59d271f6e8f409178fbf3",
//         "simplesNacional": true,
//         "regimeTributario": 1,
//         "incentivoFiscal": true,
//         "incentivadorCultural": true,
//         "regimeTributarioEspecial": 5,
//         "endereco": {
//           "tipoLogradouro": "Teste axios cadastro Empresa",
//           "logradouro": "Teste axios cadastro Empresa",
//           "numero": "1111111111",
//           "complemento": "Teste axios cadastro Empresa",
//           "tipoBairro": "Teste axios cadastro Empresa",
//           "bairro": "Teste axios cadastro Empresa",
//           "codigoPais": "1058",
//           "descricaoPais": "Brasil",
//           "codigoCidade": "4115200",
//           "descricaoCidade": "Maringá",
//           "estado": "PR",
//           "cep": "87023490"
//         },
//         "telefone": {
//           "ddd": "44",
//           "numero": "10101010"
//         },
//         "email": "emailteste01@testeplugnotas.com.br",
//         "nfse": {
//           "ativo": true,
//           "tipoContrato": 0,
//           "config": {
//             "producao": true,
//             "rps": {
//               "serie": "RPS",
//               "numero": 1,
//               "lote": 1
//             },
//             "prefeitura": {
//               "login": "teste1",
//               "senha": "teste123"
//             },
//             "email": {
//               "envio": true
//             }
//           }
//         },
//         "nfe": {
//           "ativo": true,
//           "tipoContrato": 0,
//           "config": {
//             "producao": true,
//             "impressaoFcp": true,
//             "impressaoPartilha": true,
//             "serie": 1,
//             "numero": 1,
//             "dfe": {
//               "ativo": true
//             },
//             "email": {
//               "envio": true
//             }
//           }
//         },
//         "nfce": {
//           "ativo": true,
//           "tipoContrato": 0,
//           "config": {
//             "producao": true,
//             "serie": 1,
//             "numero": 1,
//             "email": {
//               "envio": true
//             },
//             "sefaz": {
//               "idCodigoSegurancaContribuinte": "string",
//               "codigoSegurancaContribuinte": "string"
//             }
//           }
//         }
//       }
//     );

//     return empresa.data;
// }

// main()


// async function main(){
//     const envio = await nf([
//         {
//           "idIntegracao": "666",
//           "presencial": true,
//           "consumidorFinal": true,
//           "natureza": "OPERAÇÃO INTERNA",
//           "emitente": {
//             "cpfCnpj": "58896213000123"
//           },
//           "destinatario": {
//             "cpfCnpj": "58896213000123",
//             "razaoSocial": "NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
//             "email": "contato@tecnospeed.com.br",
//             "endereco": {
//               "logradouro": "Testes notas com axios",
//               "numero": "111111",
//               "bairro": "CENTRO",
//               "codigoCidade": "4115200",
//               "descricaoCidade": "MARINGA",
//               "estado": "PR",
//               "cep": "87020025"
//             }
//           },
//           "itens": [
//             {
//               "codigo": "10",
//               "descricao": "NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
//               "ncm": "06029090",
//               "cest": "0123456",
//               "cfop": "5101",
//               "valorUnitario": {
//                 "comercial": 4.6,
//                 "tributavel": 4.6
//               },
//               "valor": 4.6,
//               "tributos": {
//                 "icms": {
//                   "origem": "0",
//                   "cst": "00",
//                   "baseCalculo": {
//                     "modalidadeDeterminacao": 0,
//                     "valor": 0
//                   },
//                   "aliquota": 0,
//                   "valor": 0
//                 },
//                 "pis": {
//                   "cst": "99",
//                   "baseCalculo": {
//                     "valor": 0,
//                     "quantidade": 0
//                   },
//                   "aliquota": 0,
//                   "valor": 0
//                 },
//                 "cofins": {
//                   "cst": "07",
//                   "baseCalculo": {
//                     "valor": 0
//                   },
//                   "aliquota": 0,
//                   "valor": 0
//                 }
//               }
//             }
//           ],
//           "pagamentos": [
//             {
//               "aVista": true,
//               "meio": "01",
//               "valor": 4.6
//             }
//           ],
//           "responsavelTecnico": {
//             "cpfCnpj": "36358569000170",
//             "nome": "TestePlugNotas",
//             "email": "contato@tecnospeed.com.br",
//             "telefone": {
//               "ddd": "44",
//               "numero": "30379500"
//             }
//           }
//         }
//       ]
//     )
//     return envio.data;
// };

// main()


// async function main(){
//     const path = ('../arquivos/certificadoPEM.pfx')
//     const senha = "123mudar"
//     const up = await cadCert(path,senha)

//     return up.data;
// }
// main()
