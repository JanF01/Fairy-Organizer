import { Component, OnInit} from '@angular/core';
import { faKey,faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { VerificationService, TokenPayload } from "../verification.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faKey = faKey
  faHatWizard = faHatWizard
  alert: string = ""

  credentials: TokenPayload = {
     id:0,
     login: '',
     email: '',
     password: ''
  }

  constructor(private verify: VerificationService, private router: Router) {
  }

  ngOnInit() {}

  checkLogin() {
    this.verify.login(this.credentials).subscribe((res)=>{
        if(res.token){
        this.router.navigateByUrl("/(main:dashboard)")
        }else{
          console.log("error")
        }
      
    },
    err=>{
      this.alert = err.error.text
    })

  }
  

}
