import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsUserNameUniqueConstraint } from './validators/isUserNameUnique';

@Module({
    controllers: [UserController],
    providers: [UserService, IsUserNameUniqueConstraint]
})
export class UserModule{}