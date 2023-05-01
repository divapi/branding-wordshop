import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TracksComponent } from './tracks/tracks.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AudioComponent } from './audio/audio.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'tracks', component:TracksComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'audio', component:AudioComponent},
  {path: 'single-blog', component:SingleBlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
