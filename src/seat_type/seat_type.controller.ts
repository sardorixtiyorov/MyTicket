import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('SeatType')
@Controller('seat_type')
export class SeatTypeController {
  constructor(private readonly seat_typeService: SeatTypeService) {}
  @ApiOperation({ summary: 'SeatType yaratish' })
  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seat_typeService.create(createSeatTypeDto);
  }
  @ApiOperation({ summary: "SeatTypelarni ko'rish" })
  @Get()
  findAll() {
    return this.seat_typeService.findAll();
  }
  @ApiOperation({ summary: "SeatTypeni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seat_typeService.findOne(+id);
  }
  @ApiOperation({ summary: "SeatTypeni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto,
  ) {
    return this.seat_typeService.update(+id, updateSeatTypeDto);
  }
  @ApiOperation({ summary: "SeatTypeni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seat_typeService.remove(+id);
  }
}
