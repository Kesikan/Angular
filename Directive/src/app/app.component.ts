import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';

  courses=[
    {id:5, name:'course1'},
    {id:6, name:'course2'}
  ]
}
