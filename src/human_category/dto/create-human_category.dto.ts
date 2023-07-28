import { ApiProperty } from '@nestjs/swagger';

export class CreateHumanCategoryDto {
  @ApiProperty({ example: 'name1', description: 'Name' })
  name: string;

  @ApiProperty({ example: '10', description: 'Yosh chegarasi' })
  start_age: number;

  @ApiProperty({ example: '70', description: 'Yosh chegarasi' })
  finish_age: number;

  @ApiProperty({ example: '1', description: 'Jinsi' })
  gender: number;
}
