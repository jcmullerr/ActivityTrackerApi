import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityDto {
  @ApiProperty({
    example: 'running',
    description: `It's the name of the activity`,
  })
  name: string;
}
