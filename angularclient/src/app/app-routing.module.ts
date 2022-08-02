import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {BookPageComponent} from "./pages/book-page/book-page.component";

const routes: Routes = [
  {path: '', component: UserPageComponent},
  {path: 'book', component: BookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
