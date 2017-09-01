import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { PostService } from "app/services/post.service";
import { AppError } from "app/common/app-error";
import { NotFoundError } from "app/common/not-found-error";
import { BadInput } from "app/common/bad-input";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private service: PostService) {}

  // These methods will call the service and subcribe, once they recieve the 
  // obserable than they will run the callback
  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    },  (error: AppError) => {
      if (error instanceof BadInput) {
        //this.form.setErrors(error.originalError);
      } 
      else throw error;
    })
};


  updatePost(input: HTMLInputElement) {
    this.service.updatePost(input).subscribe(response => {
      console.log(response.json());
    });
  }

  deletePost(post) {
    this.service.deletePost(555).subscribe(response  => { 
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, 
    (error: AppError) => {
      if (error instanceof NotFoundError)
        alert("This post has already been deleted")
      else throw error;
    }); 
  }

  ngOnInit() {
    this.service.getPost().subscribe(response  => { 
      this.posts = response.json();
    });  
  }
}
