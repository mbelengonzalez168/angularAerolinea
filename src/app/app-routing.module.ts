import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ctrlTravelAboutComponent } from './crtl-Travel-about/ctrl-Travel-about.component';
import { ctrlTravelArticlesComponent } from './ctrl-Travel-articles/ctrl-Travel-articles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    component : ctrlTravelArticlesComponent
  },
  {
    path: 'about',
    component : ctrlTravelAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }