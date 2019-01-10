import { Component } from '@angular/core';
import { Diary } from './diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diary';
  model = new Diary('','');
  constructor() { }
 
  ngOnInit() {
  }

  get currentEntry() { return JSON.stringify(this.model); }


}
