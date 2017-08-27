import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  //Properties
  @Input() isFavorite: boolean; 
  glyStyle = "glyphicon glyphicon-star-empty"

  //Ctor
  constructor() { }

  // Methods
  toggleFavorite(){
    this.glyStyle = (this.isFavorite) ? 
      "glyphicon glyphicon-star-empty" : 
        "glyphicon glyphicon-star";
    
    this.isFavorite = !this.isFavorite 
  }

  // Implementations
  ngOnInit() { // ok
  }
}
