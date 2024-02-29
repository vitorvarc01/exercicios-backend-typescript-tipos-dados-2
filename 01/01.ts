const fs = require('fs')

export const ler = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json'))
}

export const escrever = (dados: any): void => {
    fs.writeFileSync('../bd.json', JSON.stringify(dados))
}


