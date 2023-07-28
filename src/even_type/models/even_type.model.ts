import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface EventTypeAttrs {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: 'event_type' })
export class EventType extends Model<EventType, EventTypeAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'event1', description: 'event type nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: '1',
    description: 'event type Unilal id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;
}
