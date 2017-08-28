import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  // Properties
  likeCount: number = 8;
  likeIcon: string= "glyphicon glyphicon-heart noLikes";
  isLiked: boolean = false;

  //Methods
  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likeCount += (this.isLiked) ? +1 : -1;
  }
}
