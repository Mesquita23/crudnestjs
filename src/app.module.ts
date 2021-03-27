import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { User } from './user.model';

import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';



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
    SequelizeModule.forFeature([User])
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule {}
