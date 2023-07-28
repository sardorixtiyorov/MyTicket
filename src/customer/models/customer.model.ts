import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CustomerAttrs {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: Date;
  gender: string;
  lang_id: number;
  hashed_refresh: string;
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'customer1', description: 'Customer nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({
    example: 'customer2',
    description: 'Customer nomi',
  })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({
    example: '91-777-25-97',
    description: 'Customer phone number',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: 'Uzbeki1$t0n',
    description: 'Customer Passwordi',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @ApiProperty({
    example: 'customer@gmail.com',
    description: 'Customer email yoziladi',
  })
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({
    example: '2002.02.06',
    description: 'Customersning tugilgan kuni',
  })
  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;

  @ApiProperty({
    example: 'male',
    description: 'gander jinsi yoziladi',
  })
  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @ApiProperty({
    example: '1',
    description: 'Lang Unikal ID',
  })
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @ApiProperty({
    example: '54454sfdewfwef84$t0n',
    description: 'Admin refresh',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_refresh: string;
}
