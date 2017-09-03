import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  submit() {
    // Navigate programatically, and add optionally parameters if needed. 
    this.router.navigate(['/followers'], { 
      queryParams: { page: 1, order: 'newest'} 
    });
  }

  ngOnInit() {

    // We use an obserable because we can track all the data and be updated 
    // as new data comes in. 
    this.route.paramMap
      .subscribe(params => {
        let userName = params.get('username')
        // let this.userProfile = service.getProfile('username')
        console.log(userName)
      })

    // We can get the paremeter out of the route like this hover
    // this is only desireable if we don't mind destroying the component everytime
    // the above method is better as the component wont get destroyed, and the data will
    // simply be swaped.  
    //let username = this.route.snapshot.paramMap.get('username')  
  }

}
