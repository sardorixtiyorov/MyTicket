import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart)
    private cartRepository: typeof Cart,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const newCart = await this.cartRepository.create(createCartDto);
    return newCart;
  }

  async findAll(): Promise<Cart[]> {
    const carts = await this.cartRepository.findAll({
      include: { all: true },
    });
    return carts;
  }

  async findOne(id: number): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return cart;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const updatedCart = await this.cartRepository.update(updateCartDto, {
      where: { id },
      returning: true,
    });
    return updatedCart[1][0].dataValues;
  }

  async remove(id: number) {
    const removedCart = await this.cartRepository.destroy({
      where: { id },
    });
    return removedCart;
  }
}
