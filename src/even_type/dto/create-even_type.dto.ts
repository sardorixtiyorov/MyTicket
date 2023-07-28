import { ApiProperty } from '@nestjs/swagger';

export class CreateEvenTypeDto {
  @ApiProperty({ example: 'event1', description: 'event type nomi' })
  name: string;

  @ApiProperty({
    example: '1',
    description: 'event type Unilal id',
  })
  parent_event_type_id: number;
}
