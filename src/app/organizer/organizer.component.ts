import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faSignOutAlt, faClock, faCalendarAlt, faBullseye, faTags, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { VerificationService } from '../verification.service';
import { Router } from '@angular/router';


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
 


  
  constructor(private verify: VerificationService, private router: Router){

  }

  ngOnInit() {

  }


  changeOption(n: number){
     this.verify.state = n;
     switch(n){
       case 0:
     this.router.navigateByUrl("/(main:dashboard)");
     break;
     case 1:
      this.router.navigateByUrl("/(main:calendary)");
      break;
      case 2:
        this.router.navigateByUrl("/(main:goals)");
        break;
     }
  }
  
  


 

}
