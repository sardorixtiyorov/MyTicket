import { ApiProperty } from '@nestjs/swagger';

export class CreateVenueTypeDto {
  @ApiProperty({ example: 'venue_type1', description: 'Venue type nomi' })
  name: string;
}
