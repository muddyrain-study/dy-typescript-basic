import { SquareGroup } from "../SquareGroup";
import { GameViewer } from "../types";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from "jquery";

export class GamePageViewer implements GameViewer {
  showNext(tetris: SquareGroup): void {
    tetris.squares.forEach((square) => {
      square.viewer = new SquarePageViewer(square, $("#next")[0]);
    });
  }
  switch(tetris: SquareGroup): void {
    tetris.squares.forEach((square) => {
      square.viewer?.remove();
      square.viewer = new SquarePageViewer(square, $("#panel")[0]);
    });
  }
}
