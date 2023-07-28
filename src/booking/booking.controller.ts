import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  @ApiOperation({ summary: 'Booking yaratish' })
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }
  @ApiOperation({ summary: "Bookinglarni ko'rish" })
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }
  @ApiOperation({ summary: "Bookingni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }
  @ApiOperation({ summary: "Bookingni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }
  @ApiOperation({ summary: "Bookingni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
