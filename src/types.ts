import { Color, Mark } from './扑克牌/enums';

export interface Card {
  getString(this: any): string;
}

export interface NormalCard extends Card {
  color: Color;
  mark: Mark;
}

export interface Joker extends Card {
  type: 'big' | 'small';
}
