import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = "Book"

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/${this.url}`)
  }

  public updateBook(book: Book): Observable<Book[]> {
    return this.http.put<Book[]>(`${environment.apiUrl}/${this.url}/${book.id}`, book)
  }

  public createBook(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(`${environment.apiUrl}/${this.url}`, book)
  }

  public deleteBook(book: Book): Observable<Book[]> {
    return this.http.delete<Book[]>(`${environment.apiUrl}/${this.url}/${book.id}`)
  }
}
