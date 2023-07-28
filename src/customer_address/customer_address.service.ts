import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress)
    private customer_addressRepository: typeof CustomerAddress,
  ) {}

  async create(
    createCustomerAddressDto: CreateCustomerAddressDto,
  ): Promise<CustomerAddress> {
    const newCustomerAddress = await this.customer_addressRepository.create(
      createCustomerAddressDto,
    );
    return newCustomerAddress;
  }

  async findAll(): Promise<CustomerAddress[]> {
    const customer_addresss = await this.customer_addressRepository.findAll({
      include: { all: true },
    });
    return customer_addresss;
  }

  async findOne(id: number): Promise<CustomerAddress> {
    const customer_address = await this.customer_addressRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return customer_address;
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    const updatedCustomerAddress = await this.customer_addressRepository.update(
      updateCustomerAddressDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedCustomerAddress[1][0].dataValues;
  }

  async remove(id: number) {
    const removedCustomerAddress =
      await this.customer_addressRepository.destroy({
        where: { id },
      });
    return removedCustomerAddress;
  }
}
