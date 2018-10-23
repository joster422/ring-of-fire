export interface CardFace {
  name: string
  rule: string
  ruleName: string
}

export class Card {
  isActive = true
  isFlipped = false

  constructor(
    public name: string,
    public rule: string,
    public ruleName: string,
    public suit: string
  ) {}
}
