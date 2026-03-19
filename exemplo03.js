// Ferramenta embarcada -> vem junto com o Node
import http from "http"

// req = requisição
// res = resposta
http.createServer((req, res) => {
    // Vai aparecer no Browser
    res.end("Conectado")
}).listen(8080)

// Para enxergar mensagem ir para Localhost:8080 em qualquer browser enquanto o servidor estiver em pé(no cmd rodar: node exemplo03)
// Para derrubar servidor usar Ctrl + C no cmd