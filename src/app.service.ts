import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>This is NestJS App Running from EC2 instance<h1><br><br>Hello World!';
  }
}
