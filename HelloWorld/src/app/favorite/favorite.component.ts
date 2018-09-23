import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') 
  isFavorite : boolean;

  @Output() change = new EventEmitter();
  //isFavorite:boolean = false;



  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}
