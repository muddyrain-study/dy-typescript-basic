import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { createTetris } from "./core/Tetris";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const group = createTetris({ x: 5, y: 2 });

group.squares.forEach((sq) => {
  sq.viewer = new SquarePageViewer(sq, $("#root")[0]);
});

$("#btnDown").on("click", () => {
  group.centerPoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y + 1,
  };
});
