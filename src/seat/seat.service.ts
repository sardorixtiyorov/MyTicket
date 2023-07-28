import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepository: typeof Seat) {}

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    const newSeat = await this.seatRepository.create(createSeatDto);
    return newSeat;
  }

  async findAll(): Promise<Seat[]> {
    const seats = await this.seatRepository.findAll({
      include: { all: true },
    });
    return seats;
  }

  async findOne(id: number): Promise<Seat> {
    const seat = await this.seatRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return seat;
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const updatedSeat = await this.seatRepository.update(updateSeatDto, {
      where: { id },
      returning: true,
    });
    return updatedSeat[1][0].dataValues;
  }

  async remove(id: number) {
    const removedSeat = await this.seatRepository.destroy({ where: { id } });
    return removedSeat;
  }
}
