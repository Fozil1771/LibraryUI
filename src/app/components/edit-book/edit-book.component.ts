import { BookService } from './../../services/book.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() book?: Book;
  @Output() booksUpdated = new EventEmitter<Book[]>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.bookService.getBooks()
    .subscribe((books: Book[]) => this.booksUpdated.emit(books))
  }

  createBook(book: Book){
    this.bookService.createBook(book)
    .subscribe(_ => this.getBooks())
  }

  updateBook(book: Book){
    this.bookService.updateBook(book)
    .subscribe(_ => this.getBooks())
  }

  deleteBook(book: Book){
    this.bookService.deleteBook(book)
    .subscribe(_ => this.getBooks())
  }
 }
