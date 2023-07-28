import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { PaymentMethod } from './models/payment_method.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';

@ApiTags('PAYMENT_METHOD')
@Controller('payment_method')
export class PaymentMethodController {
  constructor(private readonly payment_methodService: PaymentMethodService) {}

  @ApiOperation({ summary: 'Create PaymentMethod' })
  @Post('create')
  async createPaymentMethod(
    @Body() creaatePaymentMethodDto: CreatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    return await this.payment_methodService.createPaymentMethod(
      creaatePaymentMethodDto,
    );
  }
  @ApiOperation({ summary: 'Get all PaymentMethods' })
  @Get()
  async getAllPaymentMethods(): Promise<PaymentMethod[]> {
    return this.payment_methodService.getAllPaymentMethods();
  }
  @ApiOperation({ summary: 'Get PaymentMethod by ID' })
  @Get('/:id')
  getPaymentMethodId(@Param('id') id: string) {
    return this.payment_methodService.getPaymentMethodById(Number(id));
  }
  @ApiOperation({ summary: 'Delete PaymentMethod' })
  @Delete('delete/:id')
  async deletePaymentMethod(@Param('id') id: string) {
    const result = await this.payment_methodService.DeletePaymentMethod(
      Number(id),
    );
    return result;
  }
  @ApiOperation({ summary: 'Update PaymentMethod' })
  @Put('update/:id')
  async updatePaymentMethod(
    @Param('id') id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    const updated = await this.payment_methodService.UpdatePaymentMethod(
      Number(id),
      updatePaymentMethodDto,
    );
    return updated;
  }
}
