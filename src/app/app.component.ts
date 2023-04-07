import { BookService } from './services/book.service';
import { Component } from '@angular/core';
import { Book } from './models/book';
import { Author } from './models/author';
import { AuthorService } from './services/author.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryUI';
  books: Book[] = [];
  bookToEdit?: Book;
  authors: Author[] = [];
  authorToEdit?: Author

  constructor(private bookService: BookService, private authorService: AuthorService) {}

  ngOnInit(): void{
    this.bookService.getBooks().subscribe((res: Book[]) => (this.books = res));
    this.authorService.getAuthors().subscribe((res: Author[]) => (this.authors = res));
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

  // authors

  updateAuthorList(authors: Author[]){
    this.authors = authors;
  }

  initNewAuthor() {
    this.authorToEdit = new Author();
  }

  editAuthor(author: Author) {
    this.authorToEdit = author;
  }
}
