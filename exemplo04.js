// Ferramentas nativas do node
import http from 'http' // Protocolo http - Servidor
import fs from 'fs'     // File System

// Sistema de rotas
let server = http.createServer((req,res) => {
    let rotaFinal
    let rota = req.url      // URL digitada pelo usuario

    // Tratando a URL digitada
    if(rota === '/'){
        rotaFinal = '/index.html'
    } else {
        rotaFinal = `${rota}.html`
    }

    fs.readFile(`./src${rotaFinal}`, (err,data) => {
        if(err) {
            fs.readFile('./src/404.html', (err404, data404) => {
                if(err404) {
                    res.writeHead(404, {'content-type': 'text/html; charset = utf-8'})
                    res.end("<h1> Pagina não encontrada </h1>")
                }
                else {
                    res.end(data404)
                    // data404 não é um texto, ele é um buffer que representa os bytes do arquivo
                }
            })
            return
        }
        res.writeHead(200,{'content-type':'text/html; charset = utf-8'})
        res.end(data)
    })
})

// Carregar server
server.listen(8080,() =>{
    console.log("servidor rodando na porta 8080")
})