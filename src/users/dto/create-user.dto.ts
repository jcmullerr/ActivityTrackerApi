import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateUserDto {
  @ApiProperty({
    example: 'jcmullerr',
    description: `It's the name that will be shown in the ui`,
  })
  username: string;

  @ApiProperty({
    example: 'user@test.com',
    description: `the user's email that will be used to login `,
  })
  email: string;

  @ApiProperty({
    example: '@m@z1ngP@55w0rd',
    description: `the user's password that will be used to login`,
  })
  password: string;
}
