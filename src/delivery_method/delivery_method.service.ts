import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryMethod } from './models/delivery_method.model';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod)
    private delivery_methodRepo: typeof DeliveryMethod,
  ) {}

  async createDeliveryMethod(
    createDeliveryMethodDto: CreateDeliveryMethodDto,
  ): Promise<DeliveryMethod> {
    const delivery_method = await this.delivery_methodRepo.create(
      createDeliveryMethodDto,
    );
    return delivery_method;
  }

  async getAllDeliveryMethods(): Promise<DeliveryMethod[]> {
    const delivery_methods = await this.delivery_methodRepo.findAll();
    return delivery_methods;
  }

  async getDeliveryMethodById(id: number): Promise<DeliveryMethod> {
    try {
      const found_delivery_method = await this.delivery_methodRepo.findOne({
        where: {
          id,
        },
      });
      return found_delivery_method;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeleteDeliveryMethod(id: number) {
    const deleted = await this.delivery_methodRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdateDeliveryMethod(
    id: number,
    updateDeliveryMethodDto: UpdateDeliveryMethodDto,
  ): Promise<DeliveryMethod> {
    const delivery_method = await this.delivery_methodRepo.update(
      updateDeliveryMethodDto,
      {
        where: { id },
        returning: true,
      },
    );
    return delivery_method[1][0].dataValues;
  }
}
