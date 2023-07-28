import { ApiProperty } from '@nestjs/swagger';

export class CreateDistrictDto {
  @ApiProperty({ example: 'dist1', description: 'district nomi' })
  dist_name: string;

  @ApiProperty({ example: 1, description: 'Coutry Unikal Id' })
  country_id: number;

  @ApiProperty({ example: 1, description: 'Region Unikal Id' })
  region_id: number;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  info: string;
}
