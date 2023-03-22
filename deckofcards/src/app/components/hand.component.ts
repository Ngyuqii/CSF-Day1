import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Hand, RemoveCard } from '../models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})

export class HandComponent {

  @Input()
  hand!: Hand;

  @Output()
  onRemoveCard = new Subject<RemoveCard>();

  removeCard(i: number) {
    //console.info(`>>> card: ${i}`)
    console.info('>>> card: ', i);
    this.onRemoveCard.next({
      name: this.hand.name,
      cardNum: i
    })
  }

}