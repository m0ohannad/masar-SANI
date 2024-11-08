import { Controller, Get, Patch, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // calculate
  @Get('/calculate')
  calculate(@Query('operation') operation: string, @Query('num1') num1: number, @Query('num2') num2: number): number {
    switch (operation) {
      case 'sum':
        return this.appService.sum(num1, num2);
      case 'sub':
        return this.appService.subtract(num1, num2);
      case 'mul':
        return this.appService.multiply(num1, num2);
      case 'div':
        return this.appService.divide(num1, num2);
      default:
        throw new Error('Invalid operation');
    }
  }

  // sum tow numbers
  @Get('/sum')
  sum(@Query('num1') num1: number, @Query('num2') num2: number): number {
    return this.appService.sum(num1, num2);
  }

  // subtract tow numbers
  @Post('/subtract')
  subtract(@Query('num1') num1: number, @Query('num2') num2: number): number {
    return this.appService.subtract(num1, num2);
  }

  // multiply tow numbers
  @Put('/multiply')
  multiply(@Query('num1') num1: number, @Query('num2') num2: number): number {
    return this.appService.multiply(num1, num2);
  }

  // divide tow numbers
  @Patch('/divide')
  divide(@Query('num1') num1: number, @Query('num2') num2: number): number {
    return this.appService.divide(num1, num2);
  }

}
