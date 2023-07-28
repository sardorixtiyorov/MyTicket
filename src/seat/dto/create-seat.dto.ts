import { ApiProperty } from '@nestjs/swagger';

export class CreateSeatDto {
  @ApiProperty({ example: '1', description: 'Sektor raqami' })
  sector: number;

  @ApiProperty({ example: '1', description: 'Qator raqami' })
  row_number: number;

  @ApiProperty({ example: '1', description: 'Raqami' })
  number: number;

  @ApiProperty({ example: '1', description: 'Seat venue id si' })
  venue_id: number;

  @ApiProperty({ example: '1', description: 'Seat turining id si' })
  seat_type_id: number;

  @ApiProperty({ example: 'location', description: 'Sxemadagi joyi' })
  location_in_schema: string;
}
