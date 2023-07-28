import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('CustomerAddress')
@Controller('customer_address')
export class CustomerAddressController {
  constructor(
    private readonly customer_addressService: CustomerAddressService,
  ) {}
  @ApiOperation({ summary: 'CustomerAddress yaratish' })
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customer_addressService.create(createCustomerAddressDto);
  }
  @ApiOperation({ summary: "CustomerAddresslarni ko'rish" })
  @Get()
  findAll() {
    return this.customer_addressService.findAll();
  }
  @ApiOperation({ summary: "CustomerAddressni ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customer_addressService.findOne(+id);
  }
  @ApiOperation({ summary: "CustomerAddressni o'zgartirish" })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto,
  ) {
    return this.customer_addressService.update(+id, updateCustomerAddressDto);
  }
  @ApiOperation({ summary: "CustomerAddressni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customer_addressService.remove(+id);
  }
}
