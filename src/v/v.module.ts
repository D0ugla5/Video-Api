import { Module } from '@nestjs/common';
import { VService } from './v.service';
import { VController } from './v.controller';

@Module({
  controllers: [VController],
  providers: [VService],
})
export class VModule {}
