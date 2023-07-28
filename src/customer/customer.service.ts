import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private customerRepository: typeof Customer,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const newCustomer = await this.customerRepository.create(createCustomerDto);
    return newCustomer;
  }

  async findAll(): Promise<Customer[]> {
    const customers = await this.customerRepository.findAll({
      include: { all: true },
    });
    return customers;
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const updatedCustomer = await this.customerRepository.update(
      updateCustomerDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedCustomer[1][0].dataValues;
  }

  async remove(id: number) {
    const removedCustomer = await this.customerRepository.destroy({
      where: { id },
    });
    return removedCustomer;
  }
}
