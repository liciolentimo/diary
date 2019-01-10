import { Component } from '@angular/core';
import { Diary } from './diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diary';
  model = new Diary('','',new Date());
  // newEntry = new Diary("","");
  // @Output() addEntry = new EventEmitter<Diary>();

  // onSubmit(){
  //   this.addEntry.emit(this.newEntry);
  // }

  // onSubmit() {
  //   console.log(this.title, this.currentEntry);
  // }

  
  constructor() { }
 
  ngOnInit() {
  }

  // get currentEntry() { return JSON.stringify(this.model); }


}
