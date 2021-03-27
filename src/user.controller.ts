import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from './user.model'
import { UsersService } from "./user.service";


@Controller('user')
export class UserController {

    constructor(private usersService: UsersService ){
    }
    

    @Get()
    obterTodos(): User[] {
        return this.usersService.obterTodos()
    }
    @Get(':id')
    obterUm(@Param() params):User{
        try{
            const user = this.usersService.obterUm(params.id)
            if(user){
                return user
            }
        }catch(error){
            console.log(error)
        }
    }

    @Post()
    criar(@Body() user: User){
        this.usersService.criar(user)
    }

    @Put()
    atualizar(@Body() user:User): User{
        this.usersService.alterar(user)
        return user
    }

    @Delete(':id')
    apagar(@Param() params){
        this.usersService.apagar(params.id)
    }
}