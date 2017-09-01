import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {}

  createPost(input: HTMLInputElement){
    let body = { title: input.value }
    input.value = '';

    this.http.post(this.url, JSON.stringify(body))
      .subscribe(response => {
        body['id'] = response.json().id;
        this.posts.splice(0, 0, body)
      })
  }

  updatePost(post: HTMLInputElement){
    this.http.patch(this.url+"/"+post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response.json())
      })
  }

   deletePost(post: HTMLInputElement){
    this.http.delete(this.url+"/"+post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response.json())
      })
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json());
    })
  }

}
