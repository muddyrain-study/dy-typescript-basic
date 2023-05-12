import GameConfig from "./GameConfig";
import { Square } from "./Square";
import { SquareGroup } from "./SquareGroup";
import { createTetris } from "./Tetris";
import { TetrisRule } from "./TetrisRule";
import { GameStatus, GameViewer, MoveDirection } from "./types";

export class Game {
  // 游戏状态
  private _gameStatus: GameStatus = GameStatus.init;
  // 当前玩家操作的方块
  private _curTetris?: SquareGroup;
  // 下一个方块
  private _nextTetris: SquareGroup = createTetris({ x: 0, y: 0 });
  // 计时器
  private _timer?: NodeJS.Timer;
  // 自动下落的间隔时间
  private _duration: number = 1000;
  // 当前游戏中已存在的方块
  private _exists: Square[] = [];

  constructor(private _viewer: GameViewer) {
    this.resetCenterPoint(GameConfig.nextSize.width, this._nextTetris);
    this._viewer.showNext(this._nextTetris);
  }
  /**
   * 游戏开始
   */
  start() {
    // 游戏状态的改变
    if (this._gameStatus === GameStatus.playing) {
      return;
    }
    this._gameStatus = GameStatus.playing;
    if (!this._curTetris) {
      // 给当前玩家操作的方块赋值
      this.switchTetris();
    }
    this.autoDrop();
  }
  /**
   * 游戏暂停
   */
  pause() {
    if (this._gameStatus === GameStatus.playing) {
      this._gameStatus = GameStatus.pause;
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }

  control_left() {
    if (this._curTetris && this._gameStatus === GameStatus.playing) {
      TetrisRule.move(this._curTetris, MoveDirection.left, this._exists);
    }
  }
  control_right() {
    if (this._curTetris && this._gameStatus === GameStatus.playing) {
      TetrisRule.move(this._curTetris, MoveDirection.right, this._exists);
    }
  }
  control_bottom() {
    if (this._curTetris && this._gameStatus === GameStatus.playing) {
      TetrisRule.moveDirectly(
        this._curTetris,
        MoveDirection.bottom,
        this._exists
      );
      this.hitDown();
    }
  }

  /**
   * 控制方块自由下落
   */
  private autoDrop() {
    if (this._timer || this._gameStatus !== GameStatus.playing) return;
    this._timer = setInterval(() => {
      if (this._curTetris) {
        if (
          !TetrisRule.move(this._curTetris, MoveDirection.bottom, this._exists)
        ) {
          // 触底
          this.hitDown();
        }
      }
    }, this._duration);
  }
  /**
   * 切换方块
   */
  private switchTetris() {
    this._curTetris = this._nextTetris;
    this.resetCenterPoint(GameConfig.panelSize.width, this._curTetris);
    this._nextTetris = createTetris({ x: 0, y: 0 });
    this.resetCenterPoint(GameConfig.nextSize.width, this._nextTetris);
    this._viewer.switch(this._curTetris);
    this._viewer.showNext(this._nextTetris);
  }
  /**
   * 设置中心点坐标，
   * @param width
   * @param tetris
   */
  private resetCenterPoint(width: number, tetris: SquareGroup) {
    const x = Math.ceil(width / 2) - 1;
    const y = 0;
    tetris.centerPoint = { x, y };
    while (tetris.squares.some((it) => it.point.y < 0)) {
      tetris.squares.forEach(
        (sq) =>
          (sq.point = {
            x: sq.point.x,
            y: sq.point.y + 1,
          })
      );
    }
  }
  /**
   * 触底之后的操作
   */
  hitDown() {
    //将当前的俄罗斯方块包含的小方块，加入到已存在的方块数组中。
    this._exists = this._exists.concat(this._curTetris!.squares);
    this.switchTetris();
  }
}
