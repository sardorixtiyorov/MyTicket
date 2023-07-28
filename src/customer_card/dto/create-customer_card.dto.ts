import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerCardDto {
  @ApiProperty({ example: 1, description: 'Customer Unikal Id' })
  customer_id: number;

  @ApiProperty({ example: 'customer1', description: 'Customer nomi' })
  name: string;

  @ApiProperty({
    example: '91-777-25-97',
    description: 'Phone number',
  })
  phone: string;

  @ApiProperty({
    example: '12345',
    description: 'number',
  })
  number: string;

  @ApiProperty({
    example: '2023',
    description: 'year',
  })
  year: string;

  @ApiProperty({
    example: 'desember',
    description: 'month',
  })
  month: string;

  @ApiProperty({ example: 'true', description: 'true yoki false qoyiladi' })
  is_active: boolean;

  @ApiProperty({ example: 'true', description: 'true yoki false qoyiladi' })
  is_main: boolean;
}
