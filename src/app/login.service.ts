import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged:boolean = true;

  state: number = 0;
  loggedValue: Subject<boolean> = new Subject<boolean>();


  constructor( private http: HttpClient) { 
     this.loggedValue.subscribe((value)=>{
          this.logged = value;
     });

  }
  changeLoggedState() {
    this.loggedValue.next(!this.logged);
}

  logIn(){
    var result = this.http.get("../server/index.js");
  }

  
}
