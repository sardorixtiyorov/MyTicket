import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('HumanCategory')
@Controller('human_category')
export class HumanCategoryController {
  constructor(private readonly human_categoryService: HumanCategoryService) {}
  @ApiOperation({ summary: 'HumanCategory yaratish' })
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.human_categoryService.create(createHumanCategoryDto);
  }
  @ApiOperation({ summary: "HumanCategorylarni ko'rish" })
  @Get()
  findAll() {
    return this.human_categoryService.findAll();
  }
  @ApiOperation({ summary: "HumanCategoryni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.human_categoryService.findOne(+id);
  }
  @ApiOperation({ summary: "HumanCategoryni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto,
  ) {
    return this.human_categoryService.update(+id, updateHumanCategoryDto);
  }
  @ApiOperation({ summary: "HumanCategoryni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.human_categoryService.remove(+id);
  }
}
