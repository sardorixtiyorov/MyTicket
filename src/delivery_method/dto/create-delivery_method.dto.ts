import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryMethodDto {
  @ApiProperty({ example: 'name', description: 'name' })
  name: string;
}
