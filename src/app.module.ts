import { Module } from '@nestjs/common';
import { User } from './user/user.model';

import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { IsUserNameUniqueConstraint } from './user/validators/isUserNameUnique';



@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.PASS_BANCO_DADOS,
      database: 'crudnest',
      autoLoadModels: true,
      synchronize: true, 
    }),
    SequelizeModule.forFeature([User]),
    
  ],
  controllers: [UserController],
  providers: [UserService, IsUserNameUniqueConstraint],
})
export class AppModule {}
