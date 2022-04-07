import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { NewsComponent } from '../news/news.component';
import { ProplayersComponent } from '../proplayers/proplayers.component';
import { ProteamsComponent } from '../proteams/proteams.component';
import { TeamsComponent } from '../teams/teams.component';

const routes: Routes = [

  { path: 'proplayer', component: ProplayersComponent },
  { path: 'proteams', component: ProteamsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'blog', component: BlogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

