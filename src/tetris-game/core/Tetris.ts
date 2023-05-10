import { SquareGroup } from "./SquareGroup";
import { Point, Shape } from "./types";
import { getRandom } from "./utils";

/**
 *   口
 * 口口口
 */
export const TShape: Shape = [
  { x: 0, y: -1 },
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 1, y: 0 },
];
/**
 *    口
 * 口口口
 */
export const LShape: Shape = [
  { x: -2, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: -1 },
];

/**
 * 口
 * 口口口
 */
export const LMirrorShape: Shape = [
  { x: 2, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 },
];

/**
 *   口口
 * 口口
 */
export const SShape: Shape = [
  { x: -1, y: 1 },
  { x: 0, y: 1 },
  { x: 0, y: 0 },
  { x: 1, y: 0 },
];

/**
 * 口口
 *   口口
 */
export const SMirrorShape: Shape = [
  { x: 1, y: 1 },
  { x: 0, y: 1 },
  { x: 0, y: 0 },
  { x: -1, y: 0 },
];

/**
 *   口口
 *   口口
 */
export const SquareShape: Shape = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
];

/**
 *   口口口口
 */
export const LineShape: Shape = [
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
];

export const shapes = [
  TShape,
  LShape,
  LMirrorShape,
  SShape,
  SMirrorShape,
  SquareShape,
  LineShape,
];

export const colors = [
  "#ff0000",
  "#ffff00",
  "#ffffff",
  "#ffaa00",
  "#0000ff",
  "#00fff7",
  "#ad6ad1",
];

/**
 * 随机产生一个俄罗斯方块(颜色随机、形状随机)
 */
export const createTetris = (centerPoint: Point) => {
  const index = getRandom(0, shapes.length - 1);
  const shape = shapes[index];
  const color = colors[index];

  return new SquareGroup(shape, centerPoint, color);
};
