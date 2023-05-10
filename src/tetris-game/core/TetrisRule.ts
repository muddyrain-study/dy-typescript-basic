/**
 * 该类中提供一些列的函数，根据游戏规则判断各种情况
 */

import GameConfig from "./GameConfig";
import { Point, Shape } from "./types";

export class TetrisRule {
  /**
   * 判断某个形状的方块，是否能够移动到目标位置
   */
  static canIMove(shape: Shape, targetPoint: Point): boolean {
    // 假设 中心点已经移动到了目标位置，算出每个小方块的坐标
    const targetSquarePoints: Point[] = shape.map((p) => {
      return {
        x: p.x + targetPoint.x,
        y: p.y + targetPoint.y,
      };
    });
    //边界判断
    const result = targetSquarePoints.some((p) => {
      //是否超出了边界
      return (
        p.x < 0 ||
        p.x >= GameConfig.panelSize.width ||
        p.y < 0 ||
        p.y >= GameConfig.panelSize.height
      );
    });
    return !result;
  }

  static move() {}
}
