import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Seat } from '../../seat/models/seat.model';

interface SeatTypeAttr {
  name: string;
}

@Table({ tableName: 'seat', createdAt: false, updatedAt: false })
export class SeatType extends Model<SeatType, SeatTypeAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: 'Vip', description: 'Joy nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => Seat)
  seat: Seat[];
}
