import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface RegionAttrs {
  country_id: number;
  name: string;
  info: string;
}

@Table({ tableName: 'region' })
export class Region extends Model<Region, RegionAttrs> {
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

  @ApiProperty({ example: 'region1', description: 'Region nomi' })
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
