import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}
  @ApiOperation({ summary: 'Status yaratish' })
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }
  @ApiOperation({ summary: "Statuslarni ko'rish" })
  @Get()
  findAll() {
    return this.statusService.findAll();
  }
  @ApiOperation({ summary: "Statusni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }
  @ApiOperation({ summary: "Statusni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }
  @ApiOperation({ summary: "Statusni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
