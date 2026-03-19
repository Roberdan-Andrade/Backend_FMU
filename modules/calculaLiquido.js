const liquido = (valBruto, valDesconto) => {
    return valBruto - valBruto * valDesconto/100
}

// Exportação do modulo
export {liquido}