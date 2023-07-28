import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHumanCategoryDto } from './create-human_category.dto';

export class UpdateHumanCategoryDto extends PartialType(
  CreateHumanCategoryDto,
) {
  @ApiProperty({ example: 'name1', description: 'Name' })
  name: string;

  @ApiProperty({ example: '10', description: 'Yosh chegarasi' })
  start_age: number;

  @ApiProperty({ example: '70', description: 'Yosh chegarasi' })
  finish_age: number;

  @ApiProperty({ example: '1', description: 'Jinsi' })
  gender: number;
}
