import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDiscountCouponDto } from './create-discount_coupon.dto';

export class UpdateDiscountCouponDto extends PartialType(
  CreateDiscountCouponDto,
) {
  @ApiProperty({ example: 'name', description: 'name' })
  name: string;
}
