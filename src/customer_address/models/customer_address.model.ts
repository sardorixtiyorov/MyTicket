import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CustomerAddressAttrs {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: string;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: 'customer_address' })
export class CustomerAddress extends Model<
  CustomerAddress,
  CustomerAddressAttrs
> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Customer Unikal Id' })
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @ApiProperty({ example: 'Customer1', description: 'Customer nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: '1',
    description: 'Country Unikal ID number',
  })
  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;

  @ApiProperty({
    example: '1',
    description: 'Region Unikal ID',
  })
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @ApiProperty({
    example: '1',
    description: 'District Unikal ID',
  })
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @ApiProperty({
    example: 'oybek street',
    description: 'street',
  })
  @Column({
    type: DataType.STRING,
  })
  street: string;

  @ApiProperty({ example: 'House', description: 'House name' })
  @Column({
    type: DataType.STRING,
  })
  house: string;

  @ApiProperty({ example: 'flat', description: 'flat' })
  @Column({
    type: DataType.STRING,
  })
  flat: string;

  @ApiProperty({ example: 'location', description: 'location' })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({ example: 'post_index', description: 'post_index' })
  @Column({
    type: DataType.STRING,
  })
  post_index: string;

  @ApiProperty({ example: 'info', description: 'information' })
  @Column({
    type: DataType.TEXT,
  })
  info: string;
}
