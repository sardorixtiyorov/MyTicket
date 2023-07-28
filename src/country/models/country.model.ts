import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CountryAttrs {
  country_name: string;
  region_id: number;
  info: string;
}

@Table({ tableName: 'country' })
export class Country extends Model<Country, CountryAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'country1', description: 'Country nomi' })
  @Column({
    type: DataType.STRING,
  })
  country_name: string;

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
