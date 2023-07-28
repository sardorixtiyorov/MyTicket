import { Injectable } from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Lang } from './models/lang.model';

@Injectable()
export class LangService {
  constructor(
    @InjectModel(Lang)
    private langRepository: typeof Lang,
  ) {}

  async create(createLangDto: CreateLangDto): Promise<Lang> {
    const newLang = await this.langRepository.create(createLangDto);
    return newLang;
  }

  async findAll(): Promise<Lang[]> {
    const langs = await this.langRepository.findAll({
      include: { all: true },
    });
    return langs;
  }

  async findOne(id: number): Promise<Lang> {
    const lang = await this.langRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return lang;
  }

  async update(id: number, updateLangDto: UpdateLangDto) {
    const updatedLang = await this.langRepository.update(updateLangDto, {
      where: { id },
      returning: true,
    });
    return updatedLang[1][0].dataValues;
  }

  async remove(id: number) {
    const removedLang = await this.langRepository.destroy({
      where: { id },
    });
    return removedLang;
  }
}
