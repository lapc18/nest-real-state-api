import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Owner } from './models/owner.entity';
import { Property } from './models/property.entity';
import { PropertiesModule } from './modules/properties/properties.module';
import { OwnerModule } from './modules/owner/owner.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pa$$w0rd',
      database: 'real_estate',
      entities: [
        Property,
        Owner
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PropertiesModule,
    OwnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}