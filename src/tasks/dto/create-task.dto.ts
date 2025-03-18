import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Learn NestJS' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Understand the basics of NestJS framework' })
  @IsNotEmpty()
  description: string;
}