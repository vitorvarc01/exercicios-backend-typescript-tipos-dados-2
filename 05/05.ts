import { escrever, ler } from "../01/01"
import { Usuario, sophia, } from "../02/dadosdousuario"




// A função detalharUsuario recebe um CPF como entrada e retorna um array de Usuário ou null.
const filtrarUsuario = (profissao: string): Usuario[] | any => {
    // Ler os dados do banco de dados e converter para o tipo Usuario[]
    const bd = ler() as Usuario[];

    // Array para armazenar o usuário encontrado
    const usuarioEncontrado = [];

    // Percorre o banco de dados em busca do usuário com o CPF fornecido
    for (let i = 0; i < bd.length; i++) {
        // Se o CPF do usuário atual for igual ao CPF fornecido, adiciona o usuário encontrado ao array
        if (bd[i].profissao === profissao) {
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


console.log(filtrarUsuario('string'))