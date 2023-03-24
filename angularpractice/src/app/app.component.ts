import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //1. App-Root
  //1.1 Title to change colour when cursor hovers over
  title = 'My First Angular Project';

  //1.2 Method to change property textColour to red and blue upon cursor movement
  textColour = 'black';
  
  cursorEntered() {
    this.textColour = 'red';
  }

  cursorExit() {
    this.textColour = 'blue';
  }

  //2. App-mood
  moodText = "";

  //3. App-count
  num = 0;
  showValue(event: number) {
    console.info('>>> increment value: ', event);
  }
 
}
