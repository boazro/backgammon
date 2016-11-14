import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})

export class PieceComponent implements OnInit {
  private _player:PlayerComponent;

  constructor(player:PlayerComponent) {
    this._player = player;
  }


  get player(): PlayerComponent {
    return this._player;
  }

  ngOnInit() {
  }

}
