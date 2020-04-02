import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router'
import { VerificationService } from "./verification.service"

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private verify: VerificationService, private router: Router) { }

  canActivate(){
    if(!this.verify.isLoggedIn()){
      this.router.navigateByUrl("/")
      return false
    }else{
      this.router.navigateByUrl("/(main:dashboard)")
    }
  }
}
