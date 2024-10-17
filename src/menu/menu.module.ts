import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
//import { Menu, MenuSchema } from './entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu]),],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
