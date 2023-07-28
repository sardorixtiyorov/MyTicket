import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDeliveryMethodDto } from './create-delivery_method.dto';

export class UpdateDeliveryMethodDto extends PartialType(
  CreateDeliveryMethodDto,
) {
  @ApiProperty({ example: 'name', description: 'name' })
  name: string;
}
