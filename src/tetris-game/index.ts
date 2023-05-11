import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { createTetris } from "./core/Tetris";
import { TetrisRule } from "./core/TetrisRule";
import { MoveDirection } from "./core/types";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const group = createTetris({ x: 5, y: 2 });

group.squares.forEach((sq) => {
  sq.viewer = new SquarePageViewer(sq, $("#root")[0]);
});

$("#btnDown").on("click", () => {
  TetrisRule.move(group, MoveDirection.bottom);
});
$("#btnUp").on("click", () => {
  TetrisRule.rotate(group);
});
$("#btnRight").on("click", () => {
  TetrisRule.move(group, MoveDirection.right);
});
$("#btnLeft").on("click", () => {
  TetrisRule.move(group, MoveDirection.left);
});
