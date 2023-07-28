import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SeatType } from './models/seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType) private seat_typeRepository: typeof SeatType,
  ) {}

  async create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType> {
    const newSeatType = await this.seat_typeRepository.create(
      createSeatTypeDto,
    );
    return newSeatType;
  }

  async findAll(): Promise<SeatType[]> {
    const seat_types = await this.seat_typeRepository.findAll({
      include: { all: true },
    });
    return seat_types;
  }

  async findOne(id: number): Promise<SeatType> {
    const seat_type = await this.seat_typeRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return seat_type;
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const updatedSeatType = await this.seat_typeRepository.update(
      updateSeatTypeDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedSeatType[1][0].dataValues;
  }

  async remove(id: number) {
    const removedSeatType = await this.seat_typeRepository.destroy({
      where: { id },
    });
    return removedSeatType;
  }
}
