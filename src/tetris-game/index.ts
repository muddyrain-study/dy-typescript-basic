import { Game } from "./core/Game";
import { GamePageViewer } from "./core/viewer/GamePageViewer";
import $ from "jquery";
var g = new Game(new GamePageViewer());

$("#btnPlay").on("click", () => {
  g.start();
});
$("#btnPause").on("click", () => {
  g.pause();
});
$("#btnLeft").on("click", () => {
  g.control_left();
});
$("#btnRight").on("click", () => {
  g.control_right();
});
$("#btnBottom").on("click", () => {
  g.control_bottom();
});
