// Importação dos modulos
import { liquido } from "./modules/calculaLiquido.js";
import { Quadrado, Cubo } from "./modules/calculaPotencia.js";

// Chamando função
let resultado = liquido(5000, 10)

console.log(`Resultado: ${resultado.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}`)

// Chama funções de potencia
let num = 8

console.log(`Quadrado de ${num}: ${Quadrado(num)}`)
console.log(`Cubo de ${num}: ${Cubo(num)}`)