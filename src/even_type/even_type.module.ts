import { Module } from '@nestjs/common';
import { EvenTypeService } from './even_type.service';
import { EvenTypeController } from './even_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventType } from './models/even_type.model';

@Module({
  imports: [SequelizeModule.forFeature([EventType])],
  controllers: [EvenTypeController],
  providers: [EvenTypeService],
})
export class EvenTypeModule {}
