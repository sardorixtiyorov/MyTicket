import { ApiProperty } from '@nestjs/swagger';

export class UpdateCartDto {
  @ApiProperty({ example: '1', description: 'tikcet Unikal id' })
  ticket_id?: number;

  @ApiProperty({ example: '1', description: 'Customer Unikal id' })
  customer_id?: number;

  @ApiProperty({
    example: '2023.12.25',
    description: 'Created At',
  })
  createdAt?: Date;

  @ApiProperty({
    example: '2023.12.26',
    description: 'Fineshed',
  })
  fineshedAt?: Date;

  @ApiProperty({
    example: '1',
    description: 'Status Unikal ID',
  })
  status_id?: number;
}
