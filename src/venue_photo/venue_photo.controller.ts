import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Venue-Photo')
@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}
  @ApiOperation({ summary: 'VenuePhoto yaratish' })
  @Post()
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }
  @ApiOperation({ summary: "VenuePhotolarni ko'rish" })
  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }
  @ApiOperation({ summary: "VenuePhotoni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }
  @ApiOperation({ summary: "VenuePhotoni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto,
  ) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }
  @ApiOperation({ summary: "VenuePhotoni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
