import { Controller, Get, Inject, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get('/hello')
  sayHello(@Query('name') name: string): string {
    return this.userService.hello(name);
  }
}
