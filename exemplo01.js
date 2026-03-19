// Declaração de variaveis
const nomeProduto = "Monitor";
let precoBase = 1200;
let precoFinal;
let desconto;

// Template String
console.log(`Produto: ${nomeProduto}`)

// console.log(`Preço original: R$${precoBase}`)
// console.log(`Preço original: R$${precoBase.toFixed(2)}`)

// Formatação para moeda brasileira
console.log(`Preço original: ${precoBase.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}`)

// Aplicação de descontos
if(precoBase >= 1000){
    desconto = "5%"
    precoFinal = precoBase * 0.95
} else if(precoBase >= 800){
    desconto = "2%"
    precoFinal = precoBase * 0.98
} else {
    desconto = "Nenhum"
    precoFinal = precoBase
}

// Exibindo resultados
console.log(`Desconto Aplicado: ${desconto}`)
console.log(`Valor Final: ${precoFinal.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}`)