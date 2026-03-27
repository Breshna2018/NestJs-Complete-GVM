import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileGeneratedModule } from './file-generated/file-generated.module';
import { StreamGeneratedModule } from './stream-generated/stream-generated.module';

@Module({
  imports: [FileGeneratedModule, StreamGeneratedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
