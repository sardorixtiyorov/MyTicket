import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerAddressDto {
  @ApiProperty({ example: 1, description: 'Customer Unikal Id' })
  customer_id?: number;

  @ApiProperty({ example: 'Customer1', description: 'Customer nomi' })
  name?: string;

  @ApiProperty({
    example: '1',
    description: 'Country Unikal ID number',
  })
  country_id?: number;

  @ApiProperty({
    example: '1',
    description: 'Region Unikal ID',
  })
  region_id?: number;

  @ApiProperty({
    example: '1',
    description: 'District Unikal ID',
  })
  district_id?: number;

  @ApiProperty({
    example: 'oybek street',
    description: 'street',
  })
  street?: string;

  @ApiProperty({ example: 'House', description: 'House name' })
  house?: string;

  @ApiProperty({ example: 'flat', description: 'flat' })
  flat?: string;

  @ApiProperty({ example: 'location', description: 'location' })
  location?: string;

  @ApiProperty({ example: 'post_index', description: 'post_index' })
  post_index?: string;

  @ApiProperty({ example: 'info', description: 'information' })
  info?: string;
}
