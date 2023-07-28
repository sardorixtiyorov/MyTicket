import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'event1', description: 'Event nomi' })
  name: string;

  @ApiProperty({
    example: 'photo.jpg',
    description: 'photo qoyiladi',
  })
  photo: string;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  start_date: Date;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  start_time: Date;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  finish_date: Date;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  finish_time: Date;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  info: string;

  @ApiProperty({
    example: 1,
    description: 'Event_Type Unikal ID',
  })
  event_type_id: number;

  @ApiProperty({
    example: '1',
    description: 'Human Category Unikal ID',
  })
  human_category_id: number;

  @ApiProperty({ example: '1', description: 'Venue Unikal ID' })
  venue_id: number;

  @ApiProperty({ example: '1', description: 'Lang Unikal Id' })
  lang_id: number;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  release_date: Date;
}
