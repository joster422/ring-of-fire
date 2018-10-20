export interface Card extends CardFace {
  isActive: boolean
  isFlipped: boolean
  suit: string
}

export interface CardFace {
  name: string
  rule: string
  ruleName: string
}
