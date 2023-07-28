import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event)
    private eventRepository: typeof Event,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const newEvent = await this.eventRepository.create(createEventDto);
    return newEvent;
  }

  async findAll(): Promise<Event[]> {
    const events = await this.eventRepository.findAll({
      include: { all: true },
    });
    return events;
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const updatedEvent = await this.eventRepository.update(updateEventDto, {
      where: { id },
      returning: true,
    });
    return updatedEvent[1][0].dataValues;
  }

  async remove(id: number) {
    const removedEvent = await this.eventRepository.destroy({
      where: { id },
    });
    return removedEvent;
  }
}
