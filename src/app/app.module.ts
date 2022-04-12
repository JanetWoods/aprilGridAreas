import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProteamsComponent } from './proteams/proteams.component';
import { TeamsComponent } from './teams/teams.component';
import { ProplayersComponent } from './proplayers/proplayers.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProteamsComponent,
    TeamsComponent,
    ProplayersComponent,
    NewsComponent,
    BlogComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
