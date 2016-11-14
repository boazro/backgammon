import { Component, OnInit} from '@angular/core';
import { PointComponent } from '../app/components/point/point.component';
import {PieceComponent} from "./components/piece/piece.component";
import {PlayerComponent} from "./components/player/player.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public points: PointComponent[];

  constructor(){
    this.points = [];
    for(let i = 0; i < 24; i++){
        let point =  new PointComponent();
        point.index = i;
        this.points.push(point);
    }
  }

    ngOnInit() {
        this.setPiecesOnBoard();
    }


    private setPiecesOnBoard = function () {
      let player1 = new PlayerComponent('first');

      this.points[0].addPiece(new PieceComponent(player1));
      this.points[0].addPiece(new PieceComponent(player1));

      this.points[11].addPiece(new PieceComponent(player1));
      this.points[11].addPiece(new PieceComponent(player1));
      this.points[11].addPiece(new PieceComponent(player1));
      this.points[11].addPiece(new PieceComponent(player1));
      this.points[11].addPiece(new PieceComponent(player1));

      this.points[16].addPiece(new PieceComponent(player1));
      this.points[16].addPiece(new PieceComponent(player1));
      this.points[16].addPiece(new PieceComponent(player1));

      this.points[18].addPiece(new PieceComponent(player1));
      this.points[18].addPiece(new PieceComponent(player1));
      this.points[18].addPiece(new PieceComponent(player1));
      this.points[18].addPiece(new PieceComponent(player1));
      this.points[18].addPiece(new PieceComponent(player1));


      let player2 = new PlayerComponent('second');

      this.points[23].addPiece(new PieceComponent(player2));
      this.points[23].addPiece(new PieceComponent(player2));

      this.points[12].addPiece(new PieceComponent(player2));
      this.points[12].addPiece(new PieceComponent(player2));
      this.points[12].addPiece(new PieceComponent(player2));
      this.points[12].addPiece(new PieceComponent(player2));
      this.points[12].addPiece(new PieceComponent(player2));

      this.points[7].addPiece(new PieceComponent(player2));
      this.points[7].addPiece(new PieceComponent(player2));
      this.points[7].addPiece(new PieceComponent(player2));

      this.points[5].addPiece(new PieceComponent(player2));
      this.points[5].addPiece(new PieceComponent(player2));
      this.points[5].addPiece(new PieceComponent(player2));
      this.points[5].addPiece(new PieceComponent(player2));
      this.points[5].addPiece(new PieceComponent(player2));
  };
}
