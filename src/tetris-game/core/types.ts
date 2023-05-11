export interface Point {
  readonly x: number;
  readonly y: number;
}

export interface IViewer {
  /**
   * 显示
   */
  show: () => void;
  /**
   * 移除
   */
  remove: () => void;
}

/**
 * 形状
 */
export type Shape = Point[];

/**
 * 移动方向
 */
export enum MoveDirection {
  left,
  right,
  bottom,
}
