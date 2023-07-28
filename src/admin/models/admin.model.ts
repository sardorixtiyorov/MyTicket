import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AdminAttrs {
  name: string;
  login: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;
  hashed_refresh: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'admin1', description: 'Admin nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'login',
    description: 'Admin logini',
  })
  @Column({
    type: DataType.STRING,
  })
  login: string;

  @ApiProperty({
    example: 'Uzbeki1$t0n',
    description: 'Admin Passwordi',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

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
  is_creator: boolean;

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
