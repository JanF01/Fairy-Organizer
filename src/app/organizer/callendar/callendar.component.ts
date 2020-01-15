import { Component, OnInit } from '@angular/core';
import {faAngleLeft, faAngleRight, faArrowsAlt, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-callendar',
  templateUrl: './callendar.component.html',
  styleUrls: ['./callendar.component.scss']
})
export class CallendarComponent implements OnInit {
  
  leftArrow = faAngleLeft;
  rightArrow = faAngleRight;
  faMove = faArrowsAlt;
  faPlus = faPlus;
  days: Array<string> = [];

  constructor() { 
    for(let i = 1;i<=35;i++){
      let y = i;
      if(i>31){
          y = i-31;
      }
      if(y<10){
      this.days.push("0"+y);
      }
      else{
        this.days.push(y.toString());
      }
    }
  }

  ngOnInit() {
  }

}
