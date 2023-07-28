import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface VeanueTypeAttrs {
  name: string;
}

@Table({ tableName: 'venue_type' })
export class VenueType extends Model<VenueType, VeanueTypeAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'venue_type1', description: 'Venue type nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
