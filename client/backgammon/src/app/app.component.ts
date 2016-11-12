import { Component, OnInit} from '@angular/core';
import { PointComponent } from '../app/components/point/point.component';

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
        let point =  new PointComponent(i);
        this.points.push(point);
    }
  }

  ngOnInit() {

  }

}
