import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface StatusAttrs {
  name: string;
  info: string;
}

@Table({ tableName: 'status' })
export class Status extends Model<Status, StatusAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'status1', description: 'status nomi' })
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
