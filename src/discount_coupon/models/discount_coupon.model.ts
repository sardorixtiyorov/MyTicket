import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Booking } from '../../booking/models/booking.model';

interface DiscountCouponAttr {
  discount_coupon_id: number;
  name: string;
}
@Table({ tableName: 'discount_coupon' })
export class DiscountCoupon extends Model<DiscountCoupon, DiscountCouponAttr> {
  @ApiProperty({ example: 'id', description: 'id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'name', description: 'name' })
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @HasMany(() => Booking)
  booking: Booking[];
}
