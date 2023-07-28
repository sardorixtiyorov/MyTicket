import { ApiProperty } from '@nestjs/swagger';

export class UpdateCountryDto {
  @ApiProperty({ example: 'country1', description: 'Country nomi' })
  country_name?: string;

  @ApiProperty({ example: 1, description: 'Region Unikal Id' })
  region_id?: number;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  info?: string;
}
