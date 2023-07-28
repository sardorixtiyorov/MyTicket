import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'admin1', description: 'Admin nomi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'login', description: 'login kiritiladi' })
  login: string;

  @ApiProperty({
    example: 'hashed_password',
    description: 'hashed_password kiritiladi',
  })
  hashed_password: string;

  @ApiProperty({ example: 'true', description: 'active yoki active emasligi' })
  is_active: boolean;

  @ApiProperty({
    example: 'true',
    description: 'is_creator yoki is_creator emasligi',
  })
  is_creator: boolean;

  @ApiProperty({
    example: 'hashed_refresh',
    description: 'hashed_refresh kiritiladi',
  })
  hashed_refresh: string;
}
