import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CustomerCardAttrs {
  customer_id: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: 'customer_card' })
export class CustomerCard extends Model<CustomerCard, CustomerCardAttrs> {
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

  @ApiProperty({ example: 'cutomer1', description: 'Customer nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: '91-777-25-97',
    description: 'Phone number',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: '12345',
    description: 'number',
  })
  @Column({
    type: DataType.STRING,
  })
  number: string;

  @ApiProperty({
    example: '2023',
    description: 'year',
  })
  @Column({
    type: DataType.STRING,
  })
  year: string;

  @ApiProperty({
    example: 'desember',
    description: 'month',
  })
  @Column({
    type: DataType.STRING,
  })
  month: string;

  @ApiProperty({ example: 'true', description: 'true yoki false qoyiladi' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({ example: 'true', description: 'true yoki false qoyiladi' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;
}
