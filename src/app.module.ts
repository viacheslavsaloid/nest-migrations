import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_CONFIG } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(TYPEORM_CONFIG), UsersModule],
})
export class AppModule {}
