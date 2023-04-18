import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TracksComponent } from './tracks/tracks.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'tracks', component:TracksComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'pages', component:PagesComponent},
  {path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
