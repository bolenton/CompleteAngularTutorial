import { Injectable } from '@angular/core';
import { DataService } from "app/services/data.service";
import { Http } from "@angular/http";

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: Http) { 
    super('https://api.github.com/users/bolenton/followers', http)

  }

}
