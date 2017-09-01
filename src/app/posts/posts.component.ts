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
  constructor(private http: Http) {
    // const body = { loginname: username, password: password };
    // const headers = new Headers({ 'content-type': 'application/json', 'accept': 'application/json'});
    // const options = new RequestOptions({ headers: headers });
  }

  createPost(input: HTMLInputElement){
    let body = { title: input.value }
    input.value = '';

    this.http.post(this.url, JSON.stringify(body))
      .subscribe(response => {
        body['id'] = response.json().id;
        this.posts.splice(0, 0, body)
      })

      
  }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json());
    })
  }

}
