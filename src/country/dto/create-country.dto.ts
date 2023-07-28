import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty({ example: 'country1', description: 'country nomi' })
  country_name: string;

  @ApiProperty({ example: 1, description: 'Region Unikal Id' })
  region_id: number;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  info: string;
}
