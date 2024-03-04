import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  // Add Book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return `${book.title} has been added successfully`;
  }
  updateBookService(book: Book): string {
    let index = this.books.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    console.log('Book Index', index);
    this.books[index] = book;
    return `Book has been successfully updated!`;
  }
  deleteBookService(bookId: number): string {
    this.books = this.books.filter((book: Book) => {
      return book.id != bookId.toString();
    });
    return 'Book has been deleted!';
  }
  findAllBookService(): Book[] {
    return this.books;
  }
}
