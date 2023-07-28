import { Module } from '@nestjs/common';
import { PaymentMethodController } from './payment_method.controller';
import { PaymentMethodService } from './payment_method.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentMethod } from './models/payment_method.model';
@Module({
  imports: [SequelizeModule.forFeature([PaymentMethod])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
