import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSeatDto } from './create-seat.dto';

export class UpdateSeatDto extends PartialType(CreateSeatDto) {
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
