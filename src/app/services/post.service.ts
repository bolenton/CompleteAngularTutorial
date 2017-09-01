import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPost(): any {
    return this.http.get(this.url);
  }

  createPost(post: any): any  {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post: HTMLInputElement){
    return this.http.patch(this.url+"/"+post.id, JSON.stringify({isRead: true}));
  }

   deletePost(id: number){
    return this.http.delete(this.url + "/" + id);
  }
}
