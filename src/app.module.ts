import { join } from 'path';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';
import { SeedModule } from './modules/seed/seed.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(EnvConfiguration().mongodb),
    UserModule,
    TaskModule,
    SeedModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
