import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { PostService } from "app/services/post.service";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(input: HTMLInputElement) {
    this.service.updatePost(input).subscribe(response => {
      console.log(response.json());
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response  => { 
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {
    this.service.getPost().subscribe(response  => { 
      this.posts = response.json();
    });
  }
}
