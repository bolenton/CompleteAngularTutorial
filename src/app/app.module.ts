import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
import { AppError } from "app/common/app-error";
import { AppErrorHandler } from "app/common/app-error-handler";
import { GithubComponent } from './github/github.component';
import { GithubFollowersService } from "app/services/github-followers.service";
import { NavbarComponent } from "app/navbar/navbar.component";
import { HomeComponent } from "app/home/home.component";
import { GithubProfileComponent } from "app/githubprofile/githubprofile.component";
import { NotFoundComponent } from "app/notfound/notfound.component";

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
    GithubComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'followers/:username/:id', component: GithubProfileComponent },
      {path: 'followers', component: GithubComponent },
      {path: 'posts', component: PostsComponent },
      {path: '**', component: NotFoundComponent },
    ])
  ],

  // Needed for Dependency Injection
  providers: [
      CoursesService,
      AuthorsService,
      PostService,
      GithubFollowersService,
      {provide: ErrorHandler, useClass: AppErrorHandler}
  ],

  bootstrap: [
    AppComponent],
})
export class AppModule { }
