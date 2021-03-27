import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table
export class User extends Model<User> {


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pass: string

    @Column({
        type: DataType.DECIMAL(11),
        allowNull: true
    })
    cpf: number

}