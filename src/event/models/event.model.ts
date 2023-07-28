import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface EventAttrs {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  finish_date: Date;
  finish_time: Date;
  info: string;
  event_type_id: number;
  human_category_id: number;
  vanue_id: number;
  lang_id: number;
  release_date: Date;
}

@Table({ tableName: 'event' })
export class Event extends Model<Event, EventAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'event1', description: 'Event nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: 'photo.jpg',
    description: 'photo qoyiladi',
  })
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  @Column({
    type: DataType.DATE,
  })
  start_date: Date;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  @Column({
    type: DataType.DATE,
  })
  start_time: Date;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  @Column({
    type: DataType.DATE,
  })
  finish_date: Date;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  @Column({
    type: DataType.DATE,
  })
  finish_time: Date;

  @ApiProperty({
    example: 'information',
    description: 'info',
  })
  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ApiProperty({
    example: 1,
    description: 'Event_Type Unikal ID',
  })
  @Column({
    type: DataType.INTEGER,
  })
  event_type_id: number;

  @ApiProperty({
    example: '1',
    description: 'Human Category Unikal ID',
  })
  @Column({
    type: DataType.INTEGER,
  })
  human_category_id: number;

  @ApiProperty({ example: '1', description: 'Venue Unikal ID' })
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ApiProperty({ example: '1', description: 'Lang Unikal Id' })
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @ApiProperty({ example: '2023.12.13', description: 'Date yoziladi' })
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
}
