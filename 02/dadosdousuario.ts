


export type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao: string,
    endereco: Endereco | null
}
export type Endereco = {
    cep: number
    rua: string,
    complemento?: string
    bairro: string
    cidade: string
}
export let dados2: Usuario = {
    nome: 'vitor',
    email: 'string',
    cpf: '12345678',
    profissao: ' string',
    endereco: null
}
export let dados3: Usuario = {
    nome: 'afonso',
    email: 'string@',
    cpf: '1234567',
    profissao: ' PG',
    endereco: null
}
export let sophia: Usuario = {
    nome: 'Mateus1',
    email: 'string@',
    cpf: '1234567001',
    profissao: ' PFF',
    endereco: {
        cep: 1234,
        rua: 'string',
        complemento: 'string',
        bairro: 'string',
        cidade: 'string'
    }
}