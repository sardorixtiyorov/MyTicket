import { ApiProperty } from '@nestjs/swagger';

export class UpdateTicketDto {
  @ApiProperty({ example: '1', description: 'Event Unikal Id' })
  event_id?: number;

  @ApiProperty({
    example: '1',
    description: 'Seat Unikal ID',
  })
  seat_id?: number;

  @ApiProperty({ example: '1', description: 'price Unikal ID' })
  price?: number;

  @ApiProperty({ example: '1', description: 'Service Unikal' })
  service_fee?: number;

  @ApiProperty({ example: '1', description: 'Status Unikal ID' })
  status?: number;

  @ApiProperty({ example: 'ticket type', description: 'Ticket Type yoziladi' })
  ticket_type?: string;
}
