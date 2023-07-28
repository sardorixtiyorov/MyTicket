import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DistrictService } from './dist.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('District')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}
  @ApiOperation({ summary: 'District yaratish' })
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }
  @ApiOperation({ summary: "Districtlarni ko'rish" })
  @Get()
  findAll() {
    return this.districtService.findAll();
  }
  @ApiOperation({ summary: "Districtni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }
  @ApiOperation({ summary: "Districtni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }
  @ApiOperation({ summary: "Districtni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
