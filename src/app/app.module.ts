import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {BookComponent} from './components/book/book.component';
import {MusicComponent} from './components/music/music.component';

const appRoutes: Routes = [ // Добавляем роутингам url
  {
    path: '', // Стартовая страница
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books', // компонента book
    component: BookComponent
  },
  {
    path: 'music', // компонента music
    component: BookComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugger REST API
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
