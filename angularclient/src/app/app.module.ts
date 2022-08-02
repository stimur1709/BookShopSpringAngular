import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserComponent} from "./components/user/user.component";
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FocusDirective } from './directives/focus.directive';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GlobalErrorComponent,
    FilterNamePipe,
    ModalComponent,
    CreateUserComponent,
    FocusDirective,
    UserPageComponent,
    BookPageComponent,
    NavigationComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
