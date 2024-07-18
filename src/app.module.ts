import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VModule } from './v/v.module';

@Module({
  imports: [VModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
