class Cardlist {
  constructor(container, cards) {
    this.container = container
    this.cards = cards
  }


  addCard(card) {
    this.container.append(card)
  }

  render() {
    this.cards.forEach(card => this.addCard(card))
  }
}
