import { Game } from "../Game";
import GameConfig from "../GameConfig";
import { SquareGroup } from "../SquareGroup";
import { GameViewer } from "../types";
import PageConfig from "./PageConfig";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from "jquery";

export class GamePageViewer implements GameViewer {
  private nextDom = $("#next");
  private panelDom = $("#panel");
  private scoreDom = $("#score");
  init(game: Game): void {
    // 设置宽高
    this.panelDom.css({
      width: GameConfig.panelSize.width * PageConfig.SquareSize.width,
      height: GameConfig.panelSize.height * PageConfig.SquareSize.height,
    });
    this.nextDom.css({
      width: GameConfig.nextSize.width * PageConfig.SquareSize.width,
      height: GameConfig.nextSize.height * PageConfig.SquareSize.height,
    });

    $(document).on("keydown", (e) => {
      if (e.key === "a") {
        game.control_left();
      }
      if (e.key === "d") {
        game.control_right();
      }
      if (e.key === "w") {
        game.controlRotate();
      }
      if (e.key === "s") {
        game.control_bottom();
      }
    });
  }
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
  showScore(score: number): void {
    console.log(score);
    this.scoreDom.html(score.toString())
  }
}
