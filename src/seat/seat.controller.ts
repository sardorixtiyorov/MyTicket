import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Seat')
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}
  @ApiOperation({ summary: 'Seat yaratish' })
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }
  @ApiOperation({ summary: "Seatlarni ko'rish" })
  @Get()
  findAll() {
    return this.seatService.findAll();
  }
  @ApiOperation({ summary: "Seatni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }
  @ApiOperation({ summary: "Seatni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }
  @ApiOperation({ summary: "Seatni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
