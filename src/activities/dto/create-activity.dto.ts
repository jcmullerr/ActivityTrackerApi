import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @ApiProperty({
    example: 'running',
    description: `It's the name of the activity`,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
