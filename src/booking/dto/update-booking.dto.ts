import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookingDto {
  @ApiProperty({ example: '1', description: 'Cart Unikal id' })
  cart_id?: number;

  @ApiProperty({
    example: '2023.12.25',
    description: 'Created At',
  })
  createdAt?: Date;

  @ApiProperty({
    example: '2023.12.26',
    description: 'Fineshed',
  })
  fineshed?: Date;

  @ApiProperty({ example: 'number', description: 'payment_method_id' })
  payment_method_id?: number;

  @ApiProperty({ example: 'number', description: 'delivery_method_id' })
  delivery_method_id?: number;

  @ApiProperty({
    example: '1',
    description: 'Coupon Unikal ID',
  })
  discount_coupon_id?: number;

  @ApiProperty({
    example: '1',
    description: 'Status Unikal ID',
  })
  status_id?: number;
}
