import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking)
    private bookingRepository: typeof Booking,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const newBooking = await this.bookingRepository.create(createBookingDto);
    return newBooking;
  }

  async findAll(): Promise<Booking[]> {
    const bookings = await this.bookingRepository.findAll({
      include: { all: true },
    });
    return bookings;
  }

  async findOne(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return booking;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const updatedBooking = await this.bookingRepository.update(
      updateBookingDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedBooking[1][0].dataValues;
  }

  async remove(id: number) {
    const removedBooking = await this.bookingRepository.destroy({
      where: { id },
    });
    return removedBooking;
  }
}
