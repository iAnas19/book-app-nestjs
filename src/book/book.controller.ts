import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('Book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBookService();
  }

  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') BookId: number): string {
    return this.bookService.deleteBookService(BookId);
  }
}
