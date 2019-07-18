import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
  private tweet: LikeModel = new LikeModel();

  post = {
    title:"Title",
    isFavorite:true
  }
  
  constructor()
  {
    this.tweet.body = "this is tweet body";
    this.tweet.isLiked = true;
    this.tweet.likeCount = 50;
  }

  

  onFavoriteChanged(eventArgs:{newValue:boolean})
  {
    alert("data changed to :" + eventArgs.newValue)
  }
}

export class LikeModel{
  body:string;
  isLiked:boolean;
  likeCount:number;
}
