import { Component, OnInit, Input} from '@angular/core';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})

export class PointComponent implements OnInit {
  @Input() position:string;
  private _index: number = 0;
  public pieces: PieceComponent[];

  constructor() {
    this.pieces = [];

  }


  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  addPiece(piece:PieceComponent){
    this.pieces.push(piece);
  }


  ngOnInit() {
  }

}
