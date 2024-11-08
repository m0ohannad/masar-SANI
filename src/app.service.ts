import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sum(num1: number, num2: number): number {
    return Number(num1) + Number(num2);
  }

  subtract(num1: number, num2: number): number {
    return Number(num1) - Number(num2);
  }

  multiply(num1: number, num2: number): number {
    return Number(num1) * Number(num2);
  }

  divide(num1: number, num2: number): number {
    return Number(num1) / Number(num2);
  }
}
