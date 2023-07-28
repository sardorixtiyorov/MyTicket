import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @ApiOperation({ summary: 'Country yaratish' })
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }
  @ApiOperation({ summary: "Countrylarni ko'rish" })
  @Get()
  findAll() {
    return this.countryService.findAll();
  }
  @ApiOperation({ summary: "Countryni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }
  @ApiOperation({ summary: "Countryni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  }
  @ApiOperation({ summary: "Countryni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
