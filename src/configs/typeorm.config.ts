import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { test1672270911386 } from '../migrations/1672270911386-test';
import { test1672271088422 } from '../migrations/1672271088422-test';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

export const TYPEORM_CONFIG: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-migrations',
  synchronize: false,
  entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
  migrations: [test1672270911386, test1672271088422],
  migrationsRun: true,
};

export default new DataSource(TYPEORM_CONFIG);
