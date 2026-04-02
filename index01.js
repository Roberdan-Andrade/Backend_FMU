import express from 'express'

const app = express()

// Enviar Textos
app.get('/', (req, res) => {
    //res.send -> Enviar texto
    res.send("<h1 style = 'color:blue; text-align:center'>Ola Mundo Express</h1>")
})

app.get('/contato', (req, res) => {
    res.send("<h1 style = 'color:blue; text-align:center'>Contato Express</h1>")
})

app.listen(8080, () =>{
    console.log('Servidor Express rodando na porta 8080')
})