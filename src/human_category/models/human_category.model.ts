import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface HumanCategoryAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({ tableName: 'human_category', createdAt: false, updatedAt: false })
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: 'name1', description: 'Name' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: '10', description: 'Yosh chegarasi' })
  @Column({
    type: DataType.INTEGER,
  })
  start_age: number;

  @ApiProperty({ example: '70', description: 'Yosh chegarasi' })
  @Column({
    type: DataType.INTEGER,
  })
  finish_age: number;

  @ApiProperty({ example: '1', description: 'Jinsi' })
  @Column({
    type: DataType.INTEGER,
  })
  gender: number;
}
