import { ApiProperty } from '@nestjs/swagger';

export class CreateRegionDto {
  @ApiProperty({ example: 1, description: 'Country Unikal Id' })
  country_id: number;

  @ApiProperty({ example: 'region1', description: 'Region nomi' })
  name: string;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  info: string;
}
