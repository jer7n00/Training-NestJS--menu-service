import { HttpException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {

  constructor(@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>){}
  async create(createMenuDto: CreateMenuDto) {
    const menu = await this.menuRepository.create(createMenuDto);
    return await this.menuRepository.save(menu);
   
  }

  async findAll(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }

  async findOne(id: number): Promise<Menu> {
    const menu = await this.menuRepository.findOneBy({id});
    if(!menu){
      throw new HttpException("404 not Found",404);
     }
     return menu;
    }
  

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const existingMenu = await this.findOne(id);
    const updatedMenu = await this.menuRepository.merge(existingMenu,updateMenuDto);
    return await this.menuRepository.save(updatedMenu);
  }

  async remove(id: number) {
    const menu = await this.findOne(id);
    return await this.menuRepository.remove(menu);
    

  }

  async findAllbyCategory(category:string):Promise<Menu[]>{
    return await this.menuRepository.find({where:{category}})

  }
}
