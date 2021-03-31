import { Exclude, Expose } from "class-transformer"
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Table, Model, Column, DataType } from "sequelize-typescript"
import { IsUserNameUnique } from "./validators/isUserNameUnique"

@Table
export class User extends Model<User> {

    @IsUserNameUnique({
        message: "User is not unique"
    })
    @IsNotEmpty({
        message:"Name is required"
    })
    @IsString()
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @IsNotEmpty(
        {
            message:"Email is required"
        }
    )
    @IsEmail({},
        {
            message:"this Email is not validity"
        }
    )
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string

    @Expose({
        name: "password"
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty(
        {
            message:"Password is required"
        }
    )
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pass: string

    @IsNotEmpty({
        message:"Cpf is required"
    })
    @IsNumber()
    @Column({
        type: DataType.DECIMAL(11),
        allowNull: true
    })
    cpf: number

}