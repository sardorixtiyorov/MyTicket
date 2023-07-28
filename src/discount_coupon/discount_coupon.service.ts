import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DiscountCoupon } from './models/discount_coupon.model';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectModel(DiscountCoupon)
    private discount_couponRepo: typeof DiscountCoupon,
  ) {}

  async createDiscountCoupon(
    createDiscountCouponDto: CreateDiscountCouponDto,
  ): Promise<DiscountCoupon> {
    const discount_coupon = await this.discount_couponRepo.create(
      createDiscountCouponDto,
    );
    return discount_coupon;
  }

  async getAllDiscountCoupons(): Promise<DiscountCoupon[]> {
    const discount_coupons = await this.discount_couponRepo.findAll();
    return discount_coupons;
  }

  async getDiscountCouponById(id: number): Promise<DiscountCoupon> {
    try {
      const found_discount_coupon = await this.discount_couponRepo.findOne({
        where: {
          id,
        },
      });
      return found_discount_coupon;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeleteDiscountCoupon(id: number) {
    const deleted = await this.discount_couponRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdateDiscountCoupon(
    id: number,
    updateDiscountCouponDto: UpdateDiscountCouponDto,
  ): Promise<DiscountCoupon> {
    const discount_coupon = await this.discount_couponRepo.update(
      updateDiscountCouponDto,
      {
        where: { id },
        returning: true,
      },
    );
    return discount_coupon[1][0].dataValues;
  }
}
