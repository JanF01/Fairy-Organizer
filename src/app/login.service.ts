import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserInfoModel } from './models/userInfo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged:boolean = true;
  loggedUser: UserInfoModel;

  state: number = 0;
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
