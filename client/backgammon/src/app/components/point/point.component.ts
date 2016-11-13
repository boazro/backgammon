import { Component, OnInit } from '@angular/core';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})

export class PointComponent implements OnInit {
  private index: number = 0;
  private pieces: PieceComponent[];

  constructor() {
    this.pieces = [];
    this.index = index;
  }

  ngOnInit() {
  }

}
