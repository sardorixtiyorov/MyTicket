import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './models/status.model';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status)
    private statusRepository: typeof Status,
  ) {}

  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    const newStatus = await this.statusRepository.create(createStatusDto);
    return newStatus;
  }

  async findAll(): Promise<Status[]> {
    const statuss = await this.statusRepository.findAll({
      include: { all: true },
    });
    return statuss;
  }

  async findOne(id: number): Promise<Status> {
    const status = await this.statusRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return status;
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const updatedStatus = await this.statusRepository.update(updateStatusDto, {
      where: { id },
      returning: true,
    });
    return updatedStatus[1][0].dataValues;
  }

  async remove(id: number) {
    const removedStatus = await this.statusRepository.destroy({
      where: { id },
    });
    return removedStatus;
  }
}
