import { Component, Input, OnInit } from '@angular/core'

import { Card } from './card.model'

@Component({
  selector: 'rof-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card

  constructor() {}

  ngOnInit() {}

  clickFace() {
    if (this.card.isFlipped) {
      this.card.isActive = false
    }
    this.card.isFlipped = true
  }
}
