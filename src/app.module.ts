import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [MenuModule],
  // controllers: [AppController],
  // providers: [AppService],
  imports:[TypeOrmModule.forRoot({
    type: 'mongodb',
    host: '127.0.0.1',
    port: 27017,
    // username: 'root',
    // password: 'pass@word1',
    database: 'restaurants',
    entities: [Menu],
    synchronize:true
  }),
MenuModule,
],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
