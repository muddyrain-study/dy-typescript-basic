/**
 * 该类中提供一些列的函数，根据游戏规则判断各种情况
 */

import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { MoveDirection, Point, Shape } from "./types";

/**
 * 判断该类型是不是 Point
 */
function isPoint(obj: any): obj is Point {
  return typeof obj.x !== "undefined";
}
/**
 * 判断该类型是不是 Point
 */
function isMoveDirection(obj: any): obj is MoveDirection {
  return typeof obj === "number";
}

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
  /**
   * 控制移动
   */
  static move(
    tetris: SquareGroup,
    targetPointOrDirection: MoveDirection
  ): boolean;
  static move(tetris: SquareGroup, targetPointOrDirection: Point): boolean;
  static move(
    tetris: SquareGroup,
    targetPointOrDirection: MoveDirection | Point
  ): boolean {
    if (isPoint(targetPointOrDirection)) {
      const point = targetPointOrDirection;
      if (TetrisRule.canIMove(tetris.shape, point)) {
        tetris.centerPoint = point;
        return true;
      }
    } else if (isMoveDirection(targetPointOrDirection)) {
      const direction = targetPointOrDirection;
      let targetPoint: Point;
      switch (direction) {
        case MoveDirection.left:
          targetPoint = {
            x: tetris.centerPoint.x - 1,
            y: tetris.centerPoint.y,
          };
          break;
        case MoveDirection.right:
          targetPoint = {
            x: tetris.centerPoint.x + 1,
            y: tetris.centerPoint.y,
          };
          break;
        case MoveDirection.bottom:
          targetPoint = {
            x: tetris.centerPoint.x,
            y: tetris.centerPoint.y + 1,
          };
          break;
        default:
          return false;
      }
      return this.move(tetris, targetPoint);
    }
    return false;
  }
  static moveDirectly(tetris: SquareGroup, direction: MoveDirection) {
    while (this.move(tetris, direction)) {}
  }
  static rotate(tetris: SquareGroup): boolean {
    // 得到旋转新的数据
    const newShape = tetris.afterRotateShape();
    if (this.canIMove(newShape, tetris.centerPoint)) {
      tetris.rotate();
      return true;
    } else {
      return false;
    }
  }
}
