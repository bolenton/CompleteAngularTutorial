import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from "app/common/app-error";
import { NotFoundError } from "app/common/not-found-error";
import { BadInput } from "app/common/bad-input";
import { DataService } from "app/services/data.service";

@Injectable()
export class PostService extends DataService{
  
  constructor(http: Http) { 
    super('http://jsonplaceholder.typicode.com/posts', http)
  }

  // These methods will Hit the end points and pass the observable to the caller.
  
}
