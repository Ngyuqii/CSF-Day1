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

  //1.3 Toggle button to enable and disable input field and display input keys
  moodText = "How do you feel today?";
  moodToday = "";
  buttonText = "Enter Mood";
  disable = true;

  mood(event: any) {
    console.info(event);
    this.moodToday += event.data;
  }

  toggleInput() {
    console.info("clicked");
    this.disable = !this.disable;
    this.disable == true? this.buttonText = "Edit Mood" : this.buttonText = "Ok";
  }

  //2. App-count
  num = 0;
  showValue(event: number) {
    console.info('>>> increment value: ', event);
  }
 
}
