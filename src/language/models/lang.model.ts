import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface LangAttrs {
  country_id: number;
  name: string;
  info: string;
}

@Table({ tableName: 'language' })
export class Lang extends Model<Lang, LangAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Country Unikal Id' })
  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;

  @ApiProperty({ example: 'lang1', description: 'Language nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  @Column({
    type: DataType.TEXT,
  })
  info: string;
}
