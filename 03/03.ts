import { escrever, ler } from "../01/01"
import { Usuario, sophia, } from "../02/dadosdousuario"

// A função atualizarUsuario recebe um CPF e os novos dados do usuário como entrada
const atualizarUsuario = (cpf: string, novosDados: Usuario) => {
    // Ler os dados do banco de dados e converter para o tipo Usuario[]
    const bd = ler() as Usuario[];

    // Array para armazenar o usuário encontrado
    const usuarioEncontrado = [];

    // Percorre o banco de dados em busca do usuário com o CPF fornecido
    for (let i = 0; i < bd.length; i++) {
        // Se o CPF do usuário atual for igual ao CPF fornecido, adiciona o usuário encontrado ao array
        if (bd[i].cpf === cpf) {
            usuarioEncontrado.push(bd[i]);
        }
    }

    // Se nenhum usuário foi encontrado com o CPF fornecido, retorna uma mensagem indicando que o usuário não foi encontrado
    if (usuarioEncontrado.length === 0) {
        return 'Usuário não encontrado.';
    }

    // Atualiza os dados do usuário encontrado combinando os novos dados com os dados existentes
    const usuarioAtualizado = { ...usuarioEncontrado[0], ...novosDados };

    // Escreve os dados atualizados de volta no banco de dados
    // Suponha que a função escrever() faça isso
    escrever([usuarioAtualizado]);

    // Retorna uma mensagem indicando que os dados do usuário foram atualizados com sucesso
    return 'Dados do usuário atualizados com sucesso.';
}

// Chama a função atualizarUsuario com um CPF específico e os novos dados do usuário e imprime o resultado no console
console.log(atualizarUsuario('1234567001', sophia));



// A função detalharUsuario recebe um CPF como entrada e retorna um array de Usuário ou null.
const detalharUsuario = (cpf: string): Usuario[] | any => {
    // Ler os dados do banco de dados e converter para o tipo Usuario[]
    const bd = ler() as Usuario[];

    // Array para armazenar o usuário encontrado
    const usuarioEncontrado = [];

    // Percorre o banco de dados em busca do usuário com o CPF fornecido
    for (let i = 0; i < bd.length; i++) {
        // Se o CPF do usuário atual for igual ao CPF fornecido, adiciona o usuário encontrado ao array
        if (bd[i].cpf === cpf) {
            usuarioEncontrado.push(bd[i]);
        }
    }

    // Se nenhum usuário foi encontrado, retorna uma mensagem indicando que o usuário não foi encontrado
    if (usuarioEncontrado.length === 0) {
        return 'Usuário não encontrado.';
    }

    // Retorna o primeiro usuário encontrado (o usuário de índice 0 no array)
    return usuarioEncontrado[0];
}

// Chama a função detalharUsuario com um CPF específico e imprime o resultado no console
console.log(detalharUsuario('1234567002'));

