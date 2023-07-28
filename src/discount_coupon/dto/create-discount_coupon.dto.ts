import { ApiProperty } from '@nestjs/swagger';

export class CreateDiscountCouponDto {
  @ApiProperty({ example: 'name', description: 'name' })
  name: string;
}
