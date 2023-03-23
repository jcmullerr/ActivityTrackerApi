import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({
    example: '2023-03-01',
    description: `It's the date when the event took place`,
  })
  date: Date;

  @ApiProperty({
    example: '1e3d11052e4a4d9c',
    description: `It's the date when the event took place`,
  })
  activity: string;
}
