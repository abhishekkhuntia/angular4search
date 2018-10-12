import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { TodoMottoService } from './services/todo-motto.service';
import { SearchByNamePipe } from './filters/search-by-name/search-by-name.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodoMottoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
