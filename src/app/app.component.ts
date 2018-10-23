import { Component } from '@angular/core'
import { Card, CardFace } from './card/card.model'

@Component({
  selector: 'rof-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deck: Card[]

  constructor() {
    this.deck = this.createDeck()
    this.shuffleDeck()
  }

  private createDeck(): Card[] {
    return suits.reduce((accumulator, suit) => {
      return accumulator.concat(
        cardFaces.map(
          cardFace =>
            new Card(cardFace.name, cardFace.rule, cardFace.ruleName, suit)
        )
      )
    }, [])
  }

  private shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      var temp = this.deck[i]
      this.deck[i] = this.deck[randomIndex]
      this.deck[randomIndex] = temp
    }
  }
}

const suits = ['♠', '♣', '♥', '♦']

const cardFaces: CardFace[] = [
  {
    name: 'Ace',
    ruleName: 'Waterfall',
    rule:
      'Start drinking. Everyone will drink at the same time as the person on your left. No one is allowed to stop drinking until the person on your left stops.'
  },
  {
    name: '2',
    ruleName: 'You',
    rule: 'Choose someone to take a drink.'
  },
  {
    name: '3',
    ruleName: 'Me',
    rule: 'Take a drink.'
  },
  {
    name: '4',
    ruleName: 'Thumbs',
    rule: 'The last person to place their thumb on the table or floor drinks.'
  },
  {
    name: '5',
    ruleName: 'Guys',
    rule: 'All of the men drink.'
  },
  {
    name: '6',
    ruleName: 'Chicks',
    rule: 'All of the women drink.'
  },
  {
    name: '7',
    ruleName: 'Heaven',
    rule: 'The last person to raise their hands in the air drinks.'
  },
  {
    name: '8',
    ruleName: 'Mate',
    rule:
      'Choose someone that will always drink with you for the remainder of the game.'
  },
  {
    name: '9',
    ruleName: 'Rhyme',
    rule:
      'Pick a word. Rhyme with that word in a circle. The first person who cannot make a rhyme drinks.'
  },
  {
    name: '10',
    ruleName: 'Catagories',
    rule:
      'Pick a catagory. Name items from that catagory in a circle. The first person who cannot name an item within the catagory drinks.'
  },
  {
    name: 'Jack',
    ruleName: 'Never Have I Ever',
    rule:
      'Everyone will have 3 points. Take turns by naming a thing you have not done, if another person has done the thing they will lose 1 point. The first person to have 0 points drinks.'
  },
  {
    name: 'Queen',
    ruleName: 'Question Master',
    rule:
      'When you ask another person a question and they answer your question, they must drink. Whoever draws the most recent Queen has this power.'
  },
  {
    name: 'King',
    ruleName: 'Rule Maker',
    rule: 'Make a rule. Whenever anyone breaks the rule they will drink.'
  }
]
