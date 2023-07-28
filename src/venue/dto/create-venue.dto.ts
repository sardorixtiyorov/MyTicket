import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVenueDto {
  @ApiProperty({ example: 'venue', description: 'Venue nomi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '📌address', description: 'Venue adresi' })
  address: string;

  @ApiProperty({ example: '📍location', description: 'Venue joylashuvi' })
  location: string;

  @ApiProperty({ example: 'https://site.com', description: 'Venue sayti' })
  site: string;

  @ApiProperty({ example: '998(90)-999-99-99', description: 'Venue raqami' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '1', description: 'Venue turining id si' })
  venue_type_id: number;

  @ApiProperty({ example: 'SCHEMA', description: 'Venue sxemasi' })
  schema: string;

  @ApiProperty({ example: '1', description: 'Venue viloyatining id si' })
  region_id: number;

  @ApiProperty({ example: '1', description: 'Venue tumanining id si' })
  district_id: number;
}
