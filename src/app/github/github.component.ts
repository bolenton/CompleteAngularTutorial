import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from "app/services/github-followers.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  followers;
  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // combine 2 Observable
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // Use our service to get the data from the server
      // this.service.getAll({id: id, page: page})
      return this.service.getAll()
    })
    .subscribe(followers => this.followers = followers);
  }
}
