import { Color, Mark } from './enums';
import { Card, Joker } from '../types';

interface PublishResult {
  player1: Deck;
  player2: Deck;
  player3: Deck;
  left: Deck;
}

export class Deck {
  private cards: Card[] = [];
  constructor(cards?: Card[]) {
    if (cards) {
      this.cards = cards;
    } else {
      this.init();
    }
  }
  private init() {
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
      for (const c of colors) {
        this.cards.push({
          color: c,
          mark: m,
          getString() {
            return this.color + this.mark;
          },
        } as Card);
      }
    }
    this.cards.push({
      type: 'small',
      getString: () => {
        return 'jo';
      },
    } as Joker);
    this.cards.push({
      type: 'big',
      getString: () => {
        return 'JO';
      },
    } as Joker);
  }
  print() {
    let result = '\n';
    this.cards.forEach((card, i) => {
      result += card.getString() + ' ';
      if ((i + 1) % 4 === 0) {
        result += '\n';
      }
    });
    console.log(result);
  }
  /**
   * 洗牌
   */
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const targetIndex = this.getRandom(0, this.cards.length);
      const temp = this.cards[i];
      this.cards[i] = this.cards[targetIndex];
      this.cards[targetIndex] = temp;
    }
  }
  /**
   * 无法获取最大值
   * @param min
   * @param max
   * @returns
   */
  private getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // 发完牌后 得到的结果有 4个 card 数组
  publish(): PublishResult {
    let player1: Deck, player2: Deck, player3: Deck, left: Deck;
    player1 = this.takeCards(17);
    player2 = this.takeCards(17);
    player3 = this.takeCards(17);
    left = new Deck(this.cards);
    return {
      player1,
      player2,
      player3,
      left,
    };
  }

  /**
   * 摸牌
   */
  private takeCards(n: number): Deck {
    const cards: Card[] = [];
    for (let i = 0; i < n; i++) {
      cards.push(this.cards.shift() as Card);
    }
    return new Deck(cards);
  }
}
