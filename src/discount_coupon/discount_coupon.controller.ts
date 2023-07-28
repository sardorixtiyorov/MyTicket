import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { DiscountCoupon } from './models/discount_coupon.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';

@ApiTags('DISCOUNT_COUPON')
@Controller('discount_coupon')
export class DiscountCouponController {
  constructor(private readonly discount_couponService: DiscountCouponService) {}

  @ApiOperation({ summary: 'Create DiscountCoupon' })
  @Post('create')
  async createDiscountCoupon(
    @Body() creaateDiscountCouponDto: CreateDiscountCouponDto,
  ): Promise<DiscountCoupon> {
    return await this.discount_couponService.createDiscountCoupon(
      creaateDiscountCouponDto,
    );
  }
  @ApiOperation({ summary: 'Get all DiscountCoupons' })
  @Get()
  async getAllDiscountCoupons(): Promise<DiscountCoupon[]> {
    return this.discount_couponService.getAllDiscountCoupons();
  }
  @ApiOperation({ summary: 'Get DiscountCoupon by ID' })
  @Get('/:id')
  getDiscountCouponId(@Param('id') id: string) {
    return this.discount_couponService.getDiscountCouponById(Number(id));
  }
  @ApiOperation({ summary: 'Delete DiscountCoupon' })
  @Delete('delete/:id')
  async deleteDiscountCoupon(@Param('id') id: string) {
    const result = await this.discount_couponService.DeleteDiscountCoupon(
      Number(id),
    );
    return result;
  }
  @ApiOperation({ summary: 'Update DiscountCoupon' })
  @Put('update/:id')
  async updateDiscountCoupon(
    @Param('id') id: string,
    @Body() updateDiscountCouponDto: UpdateDiscountCouponDto,
  ): Promise<DiscountCoupon> {
    const updated = await this.discount_couponService.UpdateDiscountCoupon(
      Number(id),
      updateDiscountCouponDto,
    );
    return updated;
  }
}
