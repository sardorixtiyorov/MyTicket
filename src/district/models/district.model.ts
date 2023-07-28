import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface DistrictAttrs {
  dist_name: string;
  coutry_id: number;
  region_id: number;
  info: string;
}

@Table({ tableName: 'district' })
export class District extends Model<District, DistrictAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'dist1', description: 'District nomi' })
  @Column({
    type: DataType.STRING,
  })
  dist_name: string;

  @ApiProperty({ example: 1, description: 'Coutry Unikal Id' })
  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;

  @ApiProperty({ example: 1, description: 'Region Unikal Id' })
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  @Column({
    type: DataType.TEXT,
  })
  info: string;
}
