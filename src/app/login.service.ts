import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged:boolean = true;
  loggedValue: Subject<boolean> = new Subject<boolean>();
  constructor() { 
     this.loggedValue.subscribe((value)=>{
          this.logged = value;
     });

  }
  changeLoggedState() {
    this.loggedValue.next(!this.logged);
}
}
