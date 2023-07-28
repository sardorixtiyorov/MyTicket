import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CartAttrs {
  ticket_id: number;
  customer_id: number;
  createdAt: Date;
  fineshedAt: Date;
  status_id: number;
}

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, CartAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'tikcet Unikal id' })
  @Column({
    type: DataType.INTEGER,
  })
  ticket_id: number;

  @ApiProperty({ example: '1', description: 'Customer Unikal id' })
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @ApiProperty({
    example: '2023.12.25',
    description: 'Created At',
  })
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @ApiProperty({
    example: '2023.12.26',
    description: 'Fineshed',
  })
  @Column({
    type: DataType.DATE,
  })
  fineshedAt: Date;

  @ApiProperty({
    example: '1',
    description: 'Status Unikal ID',
  })
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
}
