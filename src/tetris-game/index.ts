import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { createTetris } from "./core/Tetris";
import { TetrisRule } from "./core/TetrisRule";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const group = createTetris({ x: 5, y: 2 });

group.squares.forEach((sq) => {
  sq.viewer = new SquarePageViewer(sq, $("#root")[0]);
});

$("#btnDown").on("click", () => {
  const targetPoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y + 1,
  };
  if (TetrisRule.canIMove(group.shape, targetPoint)) {
    group.centerPoint = targetPoint;
  }
});
$("#btnUp").on("click", () => {
  group.centerPoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y - 1,
  };
});
$("#btnRight").on("click", () => {
  group.centerPoint = {
    x: group.centerPoint.x + 1,
    y: group.centerPoint.y,
  };
});
$("#btnLeft").on("click", () => {
  group.centerPoint = {
    x: group.centerPoint.x - 1,
    y: group.centerPoint.y,
  };
});
