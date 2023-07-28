import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Venue } from './models/venue.model';
@ApiTags('Venue')
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}
  @ApiOperation({ summary: 'Venue yaratish' })
  @Post()
  create(@Body() createVenueDto: CreateVenueDto): Promise<Venue> {
    return this.venueService.create(createVenueDto);
  }
  @ApiOperation({ summary: "Venuelarni ko'rish" })
  @Get()
  findAll(): Promise<Venue[]> {
    return this.venueService.findAll();
  }
  @ApiOperation({ summary: "Venueni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }
  @ApiOperation({ summary: "Venueni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }
  @ApiOperation({ summary: "Venueni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
