import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TaskModule } from '../task/task.module';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [TaskModule, UserModule],
})
export class SeedModule {}
