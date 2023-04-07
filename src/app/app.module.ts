import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { EditAuthorComponent } from './components/edit-author/edit-author.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    EditBookComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'authors', component: EditAuthorComponent}
    ]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
