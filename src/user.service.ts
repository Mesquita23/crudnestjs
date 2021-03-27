import { Injectable } from "@nestjs/common";
import { User } from "./user.model";

@Injectable()
export class UsersService{

    users:User[] = [
        new User('Harry Potter', 'harry@gmail.com', 'harrypass'),
        new User('Forest Gump','Forest@gmail.com', 'Forestypass'),
        new User('Caçador de pipa', 'pipa@gmail.com', 'pipapass'),
    ]

    obterTodos(): User[]{
        return this.users
    }

    obterUm(id: number): User{
        return this.users[id]
    }

    criar(user:User){
        this.users.push(user)
    }

    alterar(user: User): User {
        return user
    }

    apagar(id:Number){
        this.users.pop()
    }

}