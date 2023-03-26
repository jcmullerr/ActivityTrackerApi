import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({
    example: '2023-03-01',
    description: `It's the date when the event took place`,
  })
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    example: '1e3d11052e4a4d9c',
    description: `It's the date when the event took place`,
  })
  @IsString()
  @IsNotEmpty()
  activity: string;
}
