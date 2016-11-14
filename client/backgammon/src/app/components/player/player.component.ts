import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private _name:string;

  constructor(name:string) {
    this._name = name;
  }


  get name(): string {
    return this._name;
  }

  ngOnInit() {
  }

}
