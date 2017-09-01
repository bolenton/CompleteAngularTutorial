import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostService } from "./services/post.service";
import { AuthorsService } from './services/authors.service';
import { CoursesService } from './services/courses.service';

import { InputFormatDirective } from './input-format.directive';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { PanelComponent } from './panel/panel.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignupFormComponent } from 'app/signup-form/signup-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  // Here you want to register all your directives,
  // pipes, components, or you get an error.
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],

  // Needed for Dependency Injection
  providers: [
      CoursesService,
      AuthorsService,
      PostService
  ],

  bootstrap: [
    AppComponent],
})
export class AppModule { }
