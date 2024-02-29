import { escrever, ler } from "../01/01"
import { Usuario, dados2, dados3 } from "./dadosdousuario"




const cadastrarUsuarios = (usuario: Usuario): Usuario => {
    const bd = ler() as Usuario[]
    bd.push(usuario)

    escrever(bd)

    return usuario
}
cadastrarUsuarios(dados2)




const listarUsuarios = (): Usuario[] => {

    return ler() as Usuario[]
}

console.log(listarUsuarios())


