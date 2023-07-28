import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { VenuePhoto } from 'src/venue_photo/models/venue_photo.model';
import { Seat } from '../../seat/models/seat.model';

interface VenueAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_id: number;
  schema: string;
  region_id: number;
  district_id: number;
}

@Table({ tableName: 'venue', createdAt: false, updatedAt: false })
export class Venue extends Model<Venue, VenueAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @ApiProperty({ example: 'venue', description: 'Venue nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @ApiProperty({ example: '📌address', description: 'Venue adresi' })
  @Column({
    type: DataType.STRING,
  })
  address: string;

  @ApiProperty({ example: '📍location', description: 'Venue joylashuvi' })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({ example: 'https://site.com', description: 'Venue sayti' })
  @Column({
    type: DataType.STRING,
  })
  site: string;

  @ApiProperty({ example: '998(90)-999-99-99', description: 'Venue raqami' })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({ example: '1', description: 'Venue turining id si' })
  @Column({
    type: DataType.INTEGER,
  })
  venue_type_id: number;

  @ApiProperty({ example: 'SCHEMA', description: 'Venue sxemasi' })
  @Column({
    type: DataType.STRING(100),
  })
  schema: string;

  @ApiProperty({ example: '1', description: 'Venue viloyatining id si' })
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @ApiProperty({ example: '1', description: 'Venue tumanining id si' })
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @HasMany(() => VenuePhoto)
  venue_photo: VenuePhoto[];

  @HasMany(() => Seat)
  seat: Seat[];
}
