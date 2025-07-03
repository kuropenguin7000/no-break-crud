import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  hello(name: string): string {
    return `Hello ${name || 'Guest'}`;
  }
}
