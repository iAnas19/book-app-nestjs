import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log('Root module');
  }
}
