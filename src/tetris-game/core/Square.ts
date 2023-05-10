import { IViewer, Point } from "./types";

/**
 * 小方块
 */
export class Square {
  // 属性: 显示者
  private _viewer?: IViewer;
  private _point: Point = { x: 0, y: 0 };
  private _color: string = "";

  public get viewer() {
    return this._viewer;
  }
  public set viewer(val) {
    this._viewer = val;
    if (val) {
      val.show();
    }
  }

  public get point() {
    return this._point;
  }
  public set point(val) {
    this._point = val;
    // 完成显示
    if (this._viewer) {
      this._viewer.show();
    }
  }
  public get color() {
    return this._color;
  }
  public set color(val) {
    this._color = val;
  }
}
