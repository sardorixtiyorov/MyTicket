import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from '../../cart/models/cart.model';
import { DeliveryMethod } from '../../delivery_method/models/delivery_method.model';
import { DiscountCoupon } from '../../discount_coupon/models/discount_coupon.model';
import { PaymentMethod } from '../../payment_method/models/payment_method.model';
import { Status } from '../../status/models/status.model';

interface BookingAttrs {
  cart_id: number;
  createdAt: Date;
  fineshed: Date;
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: number;
  status_id: number;
}

@Table({ tableName: 'booking' })
export class Booking extends Model<Booking, BookingAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'Cart Unikal id' })
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cart_id: number;

  @ApiProperty({
    example: '2023.12.25',
    description: 'Created At',
  })
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @ApiProperty({
    example: '2023.12.26',
    description: 'Fineshed',
  })
  @Column({
    type: DataType.DATE,
  })
  fineshed: Date;
  @ApiProperty({ example: 'INTEGER', description: 'payment_method_id' })
  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
  })
  payment_method_id: number;
  @BelongsTo(() => PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({ example: 'INTEGER', description: 'delivery_method_id' })
  @ForeignKey(() => DeliveryMethod)
  @Column({
    type: DataType.INTEGER,
  })
  delivery_method_id: number;
  @BelongsTo(() => DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  @ApiProperty({
    example: '1',
    description: 'Coupon Unikal ID',
  })
  @ForeignKey(() => DiscountCoupon)
  @Column({
    type: DataType.INTEGER,
  })
  discount_coupon_id: number;
  @BelongsTo(() => DiscountCoupon)
  coupon: DiscountCoupon;

  @ApiProperty({
    example: '1',
    description: 'Status Unikal ID',
  })
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
  @BelongsTo(() => Status)
  status: Status;
}
