import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.model';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard)
    private customer_cardRepository: typeof CustomerCard,
  ) {}

  async create(
    createCustomerCardDto: CreateCustomerCardDto,
  ): Promise<CustomerCard> {
    const newCustomerCard = await this.customer_cardRepository.create(
      createCustomerCardDto,
    );
    return newCustomerCard;
  }

  async findAll(): Promise<CustomerCard[]> {
    const customer_cards = await this.customer_cardRepository.findAll({
      include: { all: true },
    });
    return customer_cards;
  }

  async findOne(id: number): Promise<CustomerCard> {
    const customer_card = await this.customer_cardRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return customer_card;
  }

  async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    const updatedCustomerCard = await this.customer_cardRepository.update(
      updateCustomerCardDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedCustomerCard[1][0].dataValues;
  }

  async remove(id: number) {
    const removedCustomerCard = await this.customer_cardRepository.destroy({
      where: { id },
    });
    return removedCustomerCard;
  }
}
