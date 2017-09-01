import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from "app/services/github-followers.service";

@Component({
  selector: 'github-followers',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  followers;
  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers)
  }

}
