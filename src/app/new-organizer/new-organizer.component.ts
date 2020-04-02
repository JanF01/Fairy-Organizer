import { Component,OnInit } from '@angular/core';
import { faKey,faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { VerificationService, TokenPayload } from "../verification.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-organizer',
  templateUrl: './new-organizer.component.html',
  styleUrls: ['./new-organizer.component.scss']
})
export class NewOrganizerComponent implements OnInit {

  passRepeat: string
  alert: string = ""


  faKey = faKey
  faHatWizard = faHatWizard

  credentials: TokenPayload = {
    id: 0,
    login: '',
    email: '',
    password: ''
  }


  constructor( private verify: VerificationService, private router: Router) {
  }

  ngOnInit() {}

  logValue(): boolean {

   
    if (this.credentials.login.length > 4) {
     return false
    }
    return true


  }
  register() {
    if(!this.logValue()){
   if(this.credentials.password==this.passRepeat){
    this.alert="Prawidłowo zarejestrowany";
        this.verify.register(this.credentials).subscribe(()=>{
           this.router.navigateByUrl("/(main:dashboard)");
        },
        err=>{
              console.log(err)
        })
    }else{
      this.alert="Password aren't the same"
    }
  }else{
     this.alert="To short login - minimum length of 5"
   }
  }
}
