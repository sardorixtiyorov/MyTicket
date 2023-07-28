import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from 'src/venue/models/venue.model';

interface VenuePhotoAttr {
  venue_id: number;
  url: string;
}

@Table({ tableName: 'venue', createdAt: false, updatedAt: false })
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Venue)
  @ApiProperty({ example: '1', description: 'Venuening id si' })
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;
  @BelongsTo(() => Venue)
  venue: Venue;

  @ApiProperty({ example: 'https://url.com', description: 'Venue urli' })
  @Column({
    type: DataType.STRING,
  })
  url: string;
}
