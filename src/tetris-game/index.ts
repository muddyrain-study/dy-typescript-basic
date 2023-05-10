import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";
const sq = new Square();

sq.viewer = new SquarePageViewer(sq, $("#root")[0]);

sq.color = "red";

sq.point = {
  x: 3,
  y: 0,
};

$("#btnDown").on("click", () => {
  sq.point = { x: 3, y: sq.point.y + 1 };
});
$("#btnRemove").on("click", () => {
  sq.viewer?.remove();
});
$("#btnAdd").on("click", () => {
  sq.viewer = new SquarePageViewer(sq, $("#root")[0]);
});
