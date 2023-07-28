import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TickAttrs {
  event_id: number;
  seat_id: number;
  price: number;
  service_fee: number;
  status_id: number;
  ticket_type: string;
}

@Table({ tableName: 'tick' })
export class Ticket extends Model<Ticket, TickAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'Event Unikal Id' })
  @Column({
    type: DataType.INTEGER,
  })
  event_id: number;

  @ApiProperty({
    example: '1',
    description: 'Seat Unikal ID',
  })
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;

  @ApiProperty({ example: '1', description: 'price Unikal ID' })
  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @ApiProperty({ example: '1', description: 'Service Unikal' })
  @Column({
    type: DataType.INTEGER,
  })
  service_fee: number;

  @ApiProperty({ example: '1', description: 'Status Unikal ID' })
  @Column({
    type: DataType.INTEGER,
  })
  status: number;

  @ApiProperty({ example: 'ticket type', description: 'Ticket Type yoziladi' })
  @Column({
    type: DataType.STRING,
  })
  ticket_type: string;
}
