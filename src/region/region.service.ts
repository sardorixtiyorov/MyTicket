import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region)
    private regionRepository: typeof Region,
  ) {}

  async create(createRegionDto: CreateRegionDto): Promise<Region> {
    const newRegion = await this.regionRepository.create(createRegionDto);
    return newRegion;
  }

  async findAll(): Promise<Region[]> {
    const regions = await this.regionRepository.findAll({
      include: { all: true },
    });
    return regions;
  }

  async findOne(id: number): Promise<Region> {
    const region = await this.regionRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const updatedRegion = await this.regionRepository.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
    return updatedRegion[1][0].dataValues;
  }

  async remove(id: number) {
    const removedRegion = await this.regionRepository.destroy({
      where: { id },
    });
    return removedRegion;
  }
}
