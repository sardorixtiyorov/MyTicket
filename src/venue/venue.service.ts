import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepository: typeof Venue) {}

  async create(createVenueDto: CreateVenueDto): Promise<Venue> {
    const newVenue = await this.venueRepository.create(createVenueDto);
    return newVenue;
  }

  async findAll(): Promise<Venue[]> {
    const venues = await this.venueRepository.findAll({
      include: { all: true },
    });
    return venues;
  }

  async findOne(id: number): Promise<Venue> {
    const venue = await this.venueRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return venue;
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const updatedVenue = await this.venueRepository.update(updateVenueDto, {
      where: { id },
      returning: true,
    });
    return updatedVenue[1][0].dataValues;
  }

  async remove(id: number) {
    const removedVenue = await this.venueRepository.destroy({ where: { id } });
    return removedVenue;
  }
}
