import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from './user.model'
import { UserService } from "./user.service";


@Controller('user')
export class UserController {

    constructor(private userService: UserService ){
    }
    

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.getAll()
    }
    @Get(':id')
    async getById(@Param() params): Promise<User>{
            const user = this.userService.getById(params.id)
            if(user){
                return user
            }
    }

    @Post()
    async create(@Body() user: User){
        this.userService.create(user)
    }

    @Put()
    async update(@Body() user:User): Promise<[number, User[]]>{
        return this.userService.update(user)
    }

    @Delete(':id')
    async delete(@Param() params){
        this.userService.delete(params.id)
    }
}