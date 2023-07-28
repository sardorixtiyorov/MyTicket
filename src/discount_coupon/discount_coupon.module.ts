import { Module } from '@nestjs/common';
import { DiscountCouponController } from './discount_coupon.controller';
import { DiscountCouponService } from './discount_coupon.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiscountCoupon } from './models/discount_coupon.model';
@Module({
  imports: [SequelizeModule.forFeature([DiscountCoupon])],
  controllers: [DiscountCouponController],
  providers: [DiscountCouponService],
})
export class DiscountCouponModule {}
