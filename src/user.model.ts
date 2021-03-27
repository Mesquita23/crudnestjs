export class User {
    id: number
    nome: string
    email: string
    pass: string

    constructor( nome: string, email: string, pass: string ){
        this.nome = nome
        this.email = email
        this.pass = pass

    }
}