import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District)
    private districtRepository: typeof District,
  ) {}

  async create(createDistrictDto: CreateDistrictDto): Promise<District> {
    const newDistrict = await this.districtRepository.create(createDistrictDto);
    return newDistrict;
  }

  async findAll(): Promise<District[]> {
    const districts = await this.districtRepository.findAll({
      include: { all: true },
    });
    return districts;
  }

  async findOne(id: number): Promise<District> {
    const district = await this.districtRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const updatedDistrict = await this.districtRepository.update(
      updateDistrictDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedDistrict[1][0].dataValues;
  }

  async remove(id: number) {
    const removedDistrict = await this.districtRepository.destroy({
      where: { id },
    });
    return removedDistrict;
  }
}
