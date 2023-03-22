//Card Model
export interface Card {
    suit: string;
    card: number;
    value: number;
}

//Set the constants for Card
export const SUIT = [ "clover", "spade", "diamond", "heart" ];
export const CARD = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
export const VALUE = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10 ];

//Hand Model repesentating the list of cards in a player's hand
export interface Hand {
    name: string;
    cards: Card[];
}

//RemoveCard Model representing the card dropped from a player's hand
export interface RemoveCard {
    name: string;
    cardNum: number;
}

//Deck model representing the list of cards in a deck
export class Deck {

    private deck: Card[] = [];

    //Create the deck of cards
    constructor(numOfDeck = 1) {
      for (let i = 0; i < numOfDeck; i++) {
        for (let s of SUIT) {
          for (let c of CARD) {
            this.deck.push({
              suit: s,
              card: c,
              value: VALUE[c-1]
            })
          }
        }
      }
    }

    //Method to shuffle the cards
    shuffle(): void {
        const numOfCards = this.deck.length;

        for (let i = 0; i < numOfCards; i++) {
            //Generate a random number between 0 and numOfCards
            let ranNum = Math.floor(Math.random() * numOfCards);
            //Swap this.deck[ranNum] and this.deck[i]
            let ranCard = this.deck[ranNum];
            this.deck[ranNum] = this.deck[i];
            this.deck[i] = ranCard;
        }
    }

    //Method to check if there are cards left in deck
    canTake(): boolean {
      return this.deck.length > 0;
    }

    //Method to deal num number of cards (default is 1)
    deal(num = 1): Card[] {
      return this.deck.splice(0, num);
    }
    
    //Method to return the remaining cards in the deck
    dealAll(): Card[] {
      return this.deck;
    }

}
