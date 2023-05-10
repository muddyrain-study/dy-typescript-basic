import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const group = new SquareGroup(
  [
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
  ],
  { x: 3, y: 2 },
  "red"
);

group.squares.forEach((sq) => {
  sq.viewer = new SquarePageViewer(sq, $("#root")[0]);
});

$("#btnDown").on("click", () => {
  group.centerPoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y + 1,
  };
});
