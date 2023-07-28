import { Module } from '@nestjs/common';
import { DistrictService } from './dist.service';
import { DistrictController } from './dist.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from './models/district.model';

@Module({
  imports: [SequelizeModule.forFeature([District])],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule {}
