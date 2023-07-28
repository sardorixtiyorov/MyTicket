import { Injectable } from '@nestjs/common';
import { CreateEvenTypeDto } from './dto/create-even_type.dto';
import { UpdateEvenTypeDto } from './dto/update-even_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/even_type.model';

@Injectable()
export class EvenTypeService {
  constructor(
    @InjectModel(EventType)
    private even_typeRepository: typeof EventType,
  ) {}

  async create(createEvenTypeDto: CreateEvenTypeDto): Promise<EventType> {
    const newEvenType = await this.even_typeRepository.create(
      createEvenTypeDto,
    );
    return newEvenType;
  }

  async findAll(): Promise<EventType[]> {
    const even_types = await this.even_typeRepository.findAll({
      include: { all: true },
    });
    return even_types;
  }

  async findOne(id: number): Promise<EventType> {
    const even_type = await this.even_typeRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return even_type;
  }

  async update(id: number, updateEvenTypeDto: UpdateEvenTypeDto) {
    const updatedEvenType = await this.even_typeRepository.update(
      updateEvenTypeDto,
      {
        where: { id },
        returning: true,
      },
    );
    return updatedEvenType[1][0].dataValues;
  }

  async remove(id: number) {
    const removedEvenType = await this.even_typeRepository.destroy({
      where: { id },
    });
    return removedEvenType;
  }
}
