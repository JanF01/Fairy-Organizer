import { Component, OnInit } from '@angular/core';
import {faSignOutAlt, faClock, faCalendarAlt, faBullseye, faTags, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../login.service';
import { Reference } from '@angular/compiler/src/render3/r3_ast';


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

  dateValue: Date = new Date();

  
  constructor(private lg: LoginService){

  }

  ngOnInit() {

  }

 
  logOut(){
    this.lg.changeLoggedState();
  }

  changeOption(n: number){
     this.lg.state = n;
  }



 

}
