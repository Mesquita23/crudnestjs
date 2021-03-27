import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from './user.model'
import { UsersService } from "./user.service";


@Controller('user')
export class UserController {

    constructor(private usersService: UsersService ){
    }
    

    @Get()
    async obterTodos(): Promise<User[]> {
        return this.usersService.obterTodos()
    }
    @Get(':id')
    async obterUm(@Param() params): Promise<User>{
            const user = this.usersService.obterUm(params.id)
            if(user){
                return user
            }
    }

    @Post()
    async criar(@Body() user: User){
        this.usersService.criar(user)
    }

    @Put()
    async atualizar(@Body() user:User): Promise<[number, User[]]>{
        return this.usersService.alterar(user)
    }

    @Delete(':id')
    async apagar(@Param() params){
        this.usersService.apagar(params.id)
    }
}