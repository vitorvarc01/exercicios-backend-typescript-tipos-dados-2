import { escrever, ler } from "../01/01"
import { Usuario, sophia, } from "../02/dadosdousuario"

const excluirUsuario = (cpf: string) => {
    // Ler os dados do banco de dados e converter para o tipo Usuario[]
    const bd = ler() as Usuario[];

    // Array para armazenar o índice do usuário encontrado
    let indiceUsuarioEncontrado = -1;

    // Percorre o banco de dados em busca do usuário com o CPF fornecido
    for (let i = 0; i < bd.length; i++) {
        // Se o CPF do usuário atual for igual ao CPF fornecido, armazena o índice do usuário encontrado
        if (bd[i].cpf === cpf) {
            indiceUsuarioEncontrado = i;
            break; // Interrompe o loop assim que encontrar o usuário
        }
    }

    // Se nenhum usuário foi encontrado, retorna uma mensagem indicando que o usuário não foi encontrado
    if (indiceUsuarioEncontrado === -1) {
        return 'Usuário não encontrado.';
    }

    // Remove o usuário encontrado do array de usuários
    bd.splice(indiceUsuarioEncontrado, 1);

    // Escreve os dados atualizados de volta no banco de dados
    // Suponha que a função escrever() faça isso
    escrever(bd);

    return 'Usuário excluído com sucesso.';
}


console.log(excluirUsuario('123456'));



