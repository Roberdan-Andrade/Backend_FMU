import express from 'express'
import path from 'path'

const app = express()

// Enviar paginas html
app.get('/',(req,res) => {
    //res.sendFile -> Enviar arquivos
    res.sendFile(path.resolve('./src/index.html'))
    //path.resolve transforma caminhos relativos em caminhos absolutos
})

app.get('/contato',(req,res) => {
    res.sendFile(path.resolve('./src/contato.html'))
})

app.get('/servico',(req,res) => {
    res.sendFile(path.resolve('./src/servico.html'))
})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})