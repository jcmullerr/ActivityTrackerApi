import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'jcmullerr',
    description: `It's the name that will be shown in the ui`,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'user@test.com',
    description: `the user's email that will be used to login `,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '@m@z1ngP@55w0rd',
    description: `the user's password that will be used to login`,
  })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;
}
