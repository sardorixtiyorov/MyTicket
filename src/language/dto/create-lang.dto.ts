import { ApiProperty } from '@nestjs/swagger';

export class CreateLangDto {
  @ApiProperty({ example: 1, description: 'Country Unikal Id' })
  country_id: number;

  @ApiProperty({ example: 'lang1', description: 'Language nomi' })
  name: string;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  info: string;
}
