import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from "app/common/app-error";
import { NotFoundError } from "app/common/not-found-error";
import { BadInput } from "app/common/bad-input";

@Injectable()
export class PostService {
  private url: string = 'http://jsjonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  // These methods will Hit the end points and pass the observable to the caller.
  getPost(): Observable<any> {
    return this.http.get(this.url);
  }

  createPost(post: any): any  {
    return this.http.post(this.url, JSON.stringify(post)).catch((error: Response)=> {
      if (error.status === 400)
        return Observable.throw(new BadInput(error.json()))

      return Observable.throw(new AppError(error.json()));
    });
  }

  updatePost(post: HTMLInputElement){
    return this.http.patch(this.url+"/"+post.id, JSON.stringify({isRead: true}));
  }

   deletePost(id: number) {

    return this.http.delete(this.url + "/" + id).catch((error: Response) =>{
      if (error.status === 404)
        return Observable.throw(new NotFoundError()) 
      
      return Observable.throw(new AppError(error));
    });

  }
}
