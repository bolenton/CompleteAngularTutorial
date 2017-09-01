import { AuthorsService } from '../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Array<string>;

  constructor(private _service: AuthorsService) { 
    this.authors = _service.getActors();
  }

  ngOnInit() {
  }

}
