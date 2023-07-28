import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './models/payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod)
    private payment_methodRepo: typeof PaymentMethod,
  ) {}

  async createPaymentMethod(
    createPaymentMethodDto: CreatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    const payment_method = await this.payment_methodRepo.create(
      createPaymentMethodDto,
    );
    return payment_method;
  }

  async getAllPaymentMethods(): Promise<PaymentMethod[]> {
    const payment_methods = await this.payment_methodRepo.findAll();
    return payment_methods;
  }

  async getPaymentMethodById(id: number): Promise<PaymentMethod> {
    try {
      const found_payment_method = await this.payment_methodRepo.findOne({
        where: {
          id,
        },
      });
      return found_payment_method;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeletePaymentMethod(id: number) {
    const deleted = await this.payment_methodRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdatePaymentMethod(
    id: number,
    updatePaymentMethodDto: UpdatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    const payment_method = await this.payment_methodRepo.update(
      updatePaymentMethodDto,
      {
        where: { id },
        returning: true,
      },
    );
    return payment_method[1][0].dataValues;
  }
}
