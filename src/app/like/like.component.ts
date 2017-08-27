import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  likeCount: number = 0;
  likeIcon: string= "glyphicon glyphicon-heart noLikes";
  isLiked: boolean = false;
  
  constructor() { }

  toggleLike() {
    this.isLiked = !this.isLiked;

    this.likeCount = (this.isLiked) 
      ? this.likeCount +=1 
      : this.likeCount -= 1;
  }

  ngOnInit() {
  }

}
