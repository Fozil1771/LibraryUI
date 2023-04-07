import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  @Input() author?: Author;
  @Output() authorsUpdated = new EventEmitter<Author[]>();

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.getAuthors()
  }

  getAuthors(){
    this.authorService.getAuthors()
    .subscribe((authors: Author[]) => this.authorsUpdated.emit(authors))
  }

  createAuthor(author: Author){
    this.authorService.createAuthor(author)
    .subscribe(_ => this.getAuthors())
  }

  updateAuthor(author: Author){
    this.authorService.updateAuthor(author)
    .subscribe(_ => this.getAuthors())
  }

  deleteAuthor(author: Author){
    this.authorService.deleteAuthor(author)
    .subscribe(_ => this.getAuthors())
  }
 }
