import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})

export class MoodComponent {

  @Input()
  moodText = "";

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
    
    if (this.buttonText == "Ok") {
      this.moodText = "";
      this.moodToday = "";
    }
  }

}
