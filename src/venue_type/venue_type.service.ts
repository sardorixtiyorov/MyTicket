import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType)
    private venue_typeRepository: typeof VenueType,
  ) {}

  async create(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType> {
    const newVenueType = await this.venue_typeRepository.create(
      createVenueTypeDto,
    );
    return newVenueType;
  }

  async findAll(): Promise<VenueType[]> {
    const venue_types = await this.venue_typeRepository.findAll({
      include: { all: true },
    });
    return venue_types;
  }

  async findOne(id: number): Promise<VenueType> {
    const venue_type = await this.venue_typeRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return venue_type;
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const updatedVenueType = await this.venue_typeRepository.update(
      updateVenueTypeDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedVenueType[1][0].dataValues;
  }

  async remove(id: number) {
    const removedVenueType = await this.venue_typeRepository.destroy({
      where: { id },
    });
    return removedVenueType;
  }
}
