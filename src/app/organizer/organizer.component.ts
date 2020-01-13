import { Component, OnInit } from '@angular/core';
import {faSignOutAlt, faClock, faCalendarAlt, faBullseye, faTags, faAddressBook} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  faSignOut = faSignOutAlt;
  faClock = faClock;
  faCalendarAlt = faCalendarAlt;
  faBullseye = faBullseye;
  faTags = faTags;
  faAddressBook = faAddressBook;
  constructor() { }

  ngOnInit() {
  }

  public focusIn(target: HTMLElement):void{
    target.parentElement.classList.add('e-input-focus');
  }
  public focusOut(target: HTMLElement):void{
    target.parentElement.classList.remove('e-input-focus');
  }
  public onMouseDown(target: HTMLElement):void{
    target.classList.add('e-input-btn-ripple');
  }
  public onMouseUp(target: HTMLElement):void{
    let ele: HTMLElement = target;
    setTimeout(()=>{
    ele.classList.remove('e-input-btn-ripple');
    },500);
  }

}
