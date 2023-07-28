import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Lang')
@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}
  @ApiOperation({ summary: 'Lang yaratish' })
  @Post()
  create(@Body() createLangDto: CreateLangDto) {
    return this.langService.create(createLangDto);
  }
  @ApiOperation({ summary: "Langlarni ko'rish" })
  @Get()
  findAll() {
    return this.langService.findAll();
  }
  @ApiOperation({ summary: "Langni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langService.findOne(+id);
  }
  @ApiOperation({ summary: "Langni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangDto: UpdateLangDto) {
    return this.langService.update(+id, updateLangDto);
  }
  @ApiOperation({ summary: "Langni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langService.remove(+id);
  }
}
