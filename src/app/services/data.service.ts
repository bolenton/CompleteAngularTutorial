import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';
import { AppError } from "app/common/app-error";
import { NotFoundError } from "app/common/not-found-error";
import { BadInput } from "app/common/bad-input";


@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  // These methods will Hit the end points and pass the observable to the caller.
  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleError);
  }

  create (resourse: any): any  {
    return this.http.post(this.url, JSON.stringify(resourse))
        .map(response => response.json())
        .catch(this.handleError);
  }

  update (resourse: HTMLInputElement){
    return this.http.patch(this.url+"/"+resourse.id, JSON.stringify({isRead: true}))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete (id: number) {
    return this.http.delete(this.url + "/" + id)
        .map(response => response.json())
        .catch(this.handleError);
        //.retry(3
        //.toPromise()
        
  }

  private handleError(error: Response) {
    if(error.status === 400)
      return Observable.throw(new BadInput());

    if(error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}
