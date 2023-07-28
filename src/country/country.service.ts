import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './models/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country)
    private countryRepository: typeof Country,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const newCountry = await this.countryRepository.create(createCountryDto);
    return newCountry;
  }

  async findAll(): Promise<Country[]> {
    const countrys = await this.countryRepository.findAll({
      include: { all: true },
    });
    return countrys;
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const updatedCountry = await this.countryRepository.update(
      updateCountryDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedCountry[1][0].dataValues;
  }

  async remove(id: number) {
    const removedCountry = await this.countryRepository.destroy({
      where: { id },
    });
    return removedCountry;
  }
}
