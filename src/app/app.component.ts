import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // setTimeout(() => {
    //   this.title = "creating todo app"
    // }, 2000);
  }

  title = 'todo-app-angular';
}
