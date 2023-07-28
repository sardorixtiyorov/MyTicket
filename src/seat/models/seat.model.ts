import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { SeatType } from '../../seat_type/models/seat_type.model';
import { Venue } from '../../venue/models/venue.model';

interface SeatAttr {
  sector: number;
  row_number: number;
  number: number;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: 'seat', createdAt: false, updatedAt: false })
export class Seat extends Model<Seat, SeatAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: '1', description: 'Sektor raqami' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sector: number;

  @ApiProperty({ example: '1', description: 'Qator raqami' })
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;

  @ApiProperty({ example: '1', description: 'Raqami' })
  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @ApiProperty({ example: '1', description: 'Seat venue id si' })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;
  @BelongsTo(() => Venue)
  venue: Venue;

  @ApiProperty({ example: '1', description: 'Seat turining id si' })
  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
  })
  seat_type_id: number;
  @BelongsTo(() => SeatType)
  seatType: SeatType;

  @ApiProperty({ example: 'location', description: 'Sxemadagi joyi' })
  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;
}
