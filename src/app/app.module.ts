import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesService } from "app/courses.service";
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({   
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  // Needed for Dependency Injection
  providers: [
      CoursesService,
      AuthorsService
  ],

  bootstrap: [
    AppComponent],
})
export class AppModule { }
