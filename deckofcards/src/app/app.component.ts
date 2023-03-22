import { Component, OnInit } from '@angular/core';
import { Deck, Hand, RemoveCard } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  deck: Deck;
  constructor() {
    this.deck = new Deck();
  }
  
  PLAYERS = ["Fred", "Barney", "Wilma", "Betty"];
  hands: Hand[] = [];

  ngOnInit(): void {

    //Shuffles the deck of cards
    this.deck.shuffle();
    console.info(this.deck.dealAll());

    //Add players' cards into the hand array
    for (let n of this.PLAYERS) {
      this.hands.push({
        name: n,
        cards: this.deck.deal(5)
      })
    }
    console.info(this.hands);

  }

  //Removes a card on event call
  removeCard(event: RemoveCard) {
    console.info(">>> Event: ", event);
    const p = this.hands.find(player => player.name == event.name);
    p?.cards.splice(event.cardNum, 1);
  }

}