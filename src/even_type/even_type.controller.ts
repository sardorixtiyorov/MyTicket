import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EvenTypeService } from './even_type.service';
import { CreateEvenTypeDto } from './dto/create-even_type.dto';
import { UpdateEvenTypeDto } from './dto/update-even_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('EvenType')
@Controller('even_type')
export class EvenTypeController {
  constructor(private readonly even_typeService: EvenTypeService) {}
  @ApiOperation({ summary: 'EvenType yaratish' })
  @Post()
  create(@Body() createEvenTypeDto: CreateEvenTypeDto) {
    return this.even_typeService.create(createEvenTypeDto);
  }
  @ApiOperation({ summary: "EvenTypelarni ko'rish" })
  @Get()
  findAll() {
    return this.even_typeService.findAll();
  }
  @ApiOperation({ summary: "EvenTypeni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.even_typeService.findOne(+id);
  }
  @ApiOperation({ summary: "EvenTypeni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEvenTypeDto: UpdateEvenTypeDto,
  ) {
    return this.even_typeService.update(+id, updateEvenTypeDto);
  }
  @ApiOperation({ summary: "EvenTypeni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.even_typeService.remove(+id);
  }
}
