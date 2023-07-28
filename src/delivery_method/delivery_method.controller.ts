import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeliveryMethodService } from './delivery_method.service';
import { DeliveryMethod } from './models/delivery_method.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';

@ApiTags('DELIVERY_METHOD')
@Controller('delivery_method')
export class DeliveryMethodController {
  constructor(private readonly delivery_methodService: DeliveryMethodService) {}

  @ApiOperation({ summary: 'Create DeliveryMethod' })
  @Post('create')
  async createDeliveryMethod(
    @Body() creaateDeliveryMethodDto: CreateDeliveryMethodDto,
  ): Promise<DeliveryMethod> {
    return await this.delivery_methodService.createDeliveryMethod(
      creaateDeliveryMethodDto,
    );
  }
  @ApiOperation({ summary: 'Get all DeliveryMethods' })
  @Get()
  async getAllDeliveryMethods(): Promise<DeliveryMethod[]> {
    return this.delivery_methodService.getAllDeliveryMethods();
  }
  @ApiOperation({ summary: 'Get DeliveryMethod by ID' })
  @Get('/:id')
  getDeliveryMethodId(@Param('id') id: string) {
    return this.delivery_methodService.getDeliveryMethodById(Number(id));
  }
  @ApiOperation({ summary: 'Delete DeliveryMethod' })
  @Delete('delete/:id')
  async deleteDeliveryMethod(@Param('id') id: string) {
    const result = await this.delivery_methodService.DeleteDeliveryMethod(
      Number(id),
    );
    return result;
  }
  @ApiOperation({ summary: 'Update DeliveryMethod' })
  @Put('update/:id')
  async updateDeliveryMethod(
    @Param('id') id: string,
    @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto,
  ): Promise<DeliveryMethod> {
    const updated = await this.delivery_methodService.UpdateDeliveryMethod(
      Number(id),
      updateDeliveryMethodDto,
    );
    return updated;
  }
}
