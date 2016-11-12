import { Component, OnInit } from '@angular/core';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']

})

export class PointComponent implements OnInit {
  private index: number = 0;
  //position: string = '';
  private pieces: PieceComponent[];

  constructor(index) {
     this.pieces = [];
     this.index = index;
    //
    // let verticalPosition = index <= 12 ? 'arrow-up' : 'arrow-down';
    // let parity = index % 2 == 0 ? 'even' : 'odd';
    //
    // this.position = verticalPosition + ' ' + parity;
  }

  ngOnInit() {
  }

}
