import { Component, OnInit, Input } from '@angular/core';
import { LikeModel } from 'app/app.component';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() tweet:LikeModel;


  constructor() { }

  ngOnInit() {
  }

  onClick()
  {  
    this.tweet.likeCount += this.tweet.isLiked ? -1 : +1;
    this.tweet.isLiked = !this.tweet.isLiked;
  }

}
