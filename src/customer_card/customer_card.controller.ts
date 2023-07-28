import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('CustomerCard')
@Controller('customer_card')
export class CustomerCardController {
  constructor(private readonly customer_cardService: CustomerCardService) {}
  @ApiOperation({ summary: 'CustomerCard yaratish' })
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customer_cardService.create(createCustomerCardDto);
  }
  @ApiOperation({ summary: "CustomerCardlarni ko'rish" })
  @Get()
  findAll() {
    return this.customer_cardService.findAll();
  }
  @ApiOperation({ summary: "CustomerCardni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customer_cardService.findOne(+id);
  }
  @ApiOperation({ summary: "CustomerCardni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto,
  ) {
    return this.customer_cardService.update(+id, updateCustomerCardDto);
  }
  @ApiOperation({ summary: "CustomerCardni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customer_cardService.remove(+id);
  }
}
