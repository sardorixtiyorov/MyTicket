import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('VenueType')
@Controller('venue_type')
export class VenueTypeController {
  constructor(private readonly venue_typeService: VenueTypeService) {}
  @ApiOperation({ summary: 'VenueType yaratish' })
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venue_typeService.create(createVenueTypeDto);
  }
  @ApiOperation({ summary: "VenueTypelarni ko'rish" })
  @Get()
  findAll() {
    return this.venue_typeService.findAll();
  }
  @ApiOperation({ summary: "VenueTypeni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venue_typeService.findOne(+id);
  }
  @ApiOperation({ summary: "VenueTypeni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto,
  ) {
    return this.venue_typeService.update(+id, updateVenueTypeDto);
  }
  @ApiOperation({ summary: "VenueTypeni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venue_typeService.remove(+id);
  }
}
