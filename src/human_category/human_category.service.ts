import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { HumanCategory } from './models/human_category.model';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory)
    private human_categoryRepository: typeof HumanCategory,
  ) {}

  async create(
    createHumanCategoryDto: CreateHumanCategoryDto,
  ): Promise<HumanCategory> {
    const newHumanCategory = await this.human_categoryRepository.create(
      createHumanCategoryDto,
    );
    return newHumanCategory;
  }

  async findAll(): Promise<HumanCategory[]> {
    const human_categorys = await this.human_categoryRepository.findAll({
      include: { all: true },
    });
    return human_categorys;
  }

  async findOne(id: number): Promise<HumanCategory> {
    const human_category = await this.human_categoryRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return human_category;
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    const updatedHumanCategory = await this.human_categoryRepository.update(
      updateHumanCategoryDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedHumanCategory[1][0].dataValues;
  }

  async remove(id: number) {
    const removedHumanCategory = await this.human_categoryRepository.destroy({
      where: { id },
    });
    return removedHumanCategory;
  }
}
