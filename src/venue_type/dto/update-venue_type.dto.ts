import { ApiProperty } from '@nestjs/swagger';

export class UpdateVenueTypeDto {
  @ApiProperty({ example: 'venue_type1', description: 'Venue type nomi' })
  name?: string;
}
