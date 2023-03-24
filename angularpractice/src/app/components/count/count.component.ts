import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})

export class CountComponent {

  @Input()
  //retreive startNum value from parent
  startNum!: number;

  @Output()
  newNum = new Subject<number>();

  updatePic(increment: number) {
    this.startNum += increment;
    this.newNum.next(increment);
  }

}
