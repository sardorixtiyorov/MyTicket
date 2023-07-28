import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @ApiOperation({ summary: 'Ticket yaratish' })
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }
  @ApiOperation({ summary: "Ticketlarni ko'rish" })
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }
  @ApiOperation({ summary: "Ticketni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(+id);
  }
  @ApiOperation({ summary: "Ticketni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }
  @ApiOperation({ summary: "Ticketni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(+id);
  }
}
