import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerDto {
  @ApiProperty({ example: 'customer1', description: 'Customer nomi' })
  first_name?: string;

  @ApiProperty({
    example: 'customer2',
    description: 'Customer nomi',
  })
  last_name?: string;

  @ApiProperty({
    example: '91-777-25-97',
    description: 'Customer phone number',
  })
  phone?: string;

  @ApiProperty({
    example: 'Uzbeki1$t0n',
    description: 'Customer Passwordi',
  })
  hashed_password?: string;

  @ApiProperty({
    example: 'customer@gmail.com',
    description: 'Customer email yoziladi',
  })
  email?: string;

  @ApiProperty({
    example: '2002.02.06',
    description: 'Customersning tugilgan kuni',
  })
  birth_date?: Date;

  @ApiProperty({
    example: 'male',
    description: 'gander jinsi yoziladi',
  })
  gender?: string;

  @ApiProperty({
    example: '1',
    description: 'Lang Unikal ID',
  })
  lang_id?: number;

  @ApiProperty({
    example: '54454sfdewfwef84$t0n',
    description: 'Admin refresh',
  })
  hashed_refresh?: string;
}
