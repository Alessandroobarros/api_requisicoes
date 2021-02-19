const dowloadPdf = require ('./baixarPdf')
// const dowXml = require ('./baixarXml')
// const cadEmpresa = require('./cadastroEmpresa')
// const nf = require('./envioNF')
// const cadCert = require('./subirCertificado')

describe('Teste Dowload do Pdf', () => {
    it('deve retornar o pdf da nota', async () => {
            const pdf = await dowloadPdf("601303037df2233b1a57b4b7")
            expect(pdf).tobe()
    })
})

// describe('Teste Dowload do Xml', () => {
//     it('deve retornar o xml da nota',  async() => {
//         const xml = await dowXml(`601303037df2233b1a57b4b7`)
//         expect(xml)
//     })
// })

// describe('Teste Cadastro emprtesa', () => {
//     it('deve retornar o xml da nota',  async() => {
//         const xml = await dowXml(`601303037df2233b1a57b4b7`)
//         expect(xml).not.toBeNull()
//     })
// })
