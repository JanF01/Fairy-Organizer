import { Component, OnInit } from '@angular/core';
import { faKey,faHatWizard } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  pass: string;
  faKey = faKey;
  faHatWizard = faHatWizard;

  constructor() {
    this.login = '';
    this.pass = '';
  
   }

  ngOnInit() {
  }

}
