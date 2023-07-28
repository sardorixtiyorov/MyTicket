import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket)
    private ticketRepository: typeof Ticket,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const newTicket = await this.ticketRepository.create(createTicketDto);
    return newTicket;
  }

  async findAll(): Promise<Ticket[]> {
    const tickets = await this.ticketRepository.findAll({
      include: { all: true },
    });
    return tickets;
  }

  async findOne(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return ticket;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const updatedTicket = await this.ticketRepository.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
    return updatedTicket[1][0].dataValues;
  }

  async remove(id: number) {
    const removedTicket = await this.ticketRepository.destroy({
      where: { id },
    });
    return removedTicket;
  }
}
