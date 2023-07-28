import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venueRepository: typeof VenuePhoto,
  ) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto> {
    const newVenuePhoto = await this.venueRepository.create(
      createVenuePhotoDto,
    );
    return newVenuePhoto;
  }

  async findAll(): Promise<VenuePhoto[]> {
    const venues = await this.venueRepository.findAll({
      include: { all: true },
    });
    return venues;
  }

  async findOne(id: number): Promise<VenuePhoto> {
    const venue = await this.venueRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return venue;
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const updatedVenuePhoto = await this.venueRepository.update(
      updateVenuePhotoDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedVenuePhoto[1][0].dataValues;
  }

  async remove(id: number) {
    const removedVenuePhoto = await this.venueRepository.destroy({
      where: { id },
    });
    return removedVenuePhoto;
  }
}
