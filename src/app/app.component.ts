import { BookService } from './services/book.service';
import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryUI';
  books: Book[] = [];
  bookToEdit?: Book

  constructor(private bookService: BookService) {}

  ngOnInit(): void{
    this.bookService.getBooks().subscribe((res: Book[]) => (this.books = res));
  }

  updateBookList(books: Book[]){
    this.books = books;
  }

  initNewBook() {
    this.bookToEdit = new Book();
  }

  editBook(book: Book) {
    this.bookToEdit = book;
  }
}
