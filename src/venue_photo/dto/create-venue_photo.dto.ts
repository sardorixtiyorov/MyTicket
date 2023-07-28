import { ApiProperty } from '@nestjs/swagger';

export class CreateVenuePhotoDto {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  id: number;

  @ApiProperty({ example: '1', description: 'Venuening id si' })
  venue_id: number;

  @ApiProperty({ example: 'https://url.com', description: 'Venue urli' })
  url: string;
}
