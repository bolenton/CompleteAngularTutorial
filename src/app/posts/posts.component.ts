import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private http: Http) {
    // const body = { loginname: username, password: password };
    // const headers = new Headers({ 'content-type': 'application/json', 'accept': 'application/json'});
    // const options = new RequestOptions({ headers: headers });
  }

  ngOnInit() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiY29tbXVuaXR5SUQiOiIxIiwibG9naW5OYW1lIjoic3VydWF0IiwiZXhwIjoiOC8zMS8yMDE3IDExOjU5OjQ4IFBNIn0.varIVwhDnWnnlFRyhevZ1T53XEvG0sOW4vF40hfC0Cg';
    let headers = new Headers({'Authorization': token});
    let options = new RequestOptions({ headers: headers });
    //headers.append("Content-Type", "application/x-www-form-urlencoded");
    this.http.get('http://churnite.azurewebsites.net/api/member', options).subscribe(response => {
      this.posts = response.json();
      console.log(response.json());
    })
  }

}
