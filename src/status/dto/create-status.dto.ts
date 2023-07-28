import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty({ example: 'status1', description: 'Status nomi' })
  name: string;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  info: string;
}
