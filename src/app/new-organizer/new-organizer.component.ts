import { Component,OnInit } from '@angular/core';
import { faKey,faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../login.service';
import { UserInfoModel } from "../models/userInfo";

@Component({
  selector: 'app-new-organizer',
  templateUrl: './new-organizer.component.html',
  styleUrls: ['./new-organizer.component.scss']
})
export class NewOrganizerComponent implements OnInit {

  login: string;
  pass: string;
  passRepeat: string;
  email: string;

  faKey = faKey;
  faHatWizard = faHatWizard;

  user: UserInfoModel;


  constructor(private lg: LoginService) {
    
    this.login = '';
    this.pass = '';
    this.email = '';

  }

  ngOnInit() {}

  logValue() {

    let loginInput = document.getElementsByTagName('Input') as HTMLCollectionOf < HTMLElement > ;
    if (this.login.length > 5) {
      loginInput[0].style.borderBottomColor = "green";
      console.log("git");
    }


  }
  checkLogin() {

    this.user = new UserInfoModel({
      userId: "12$d",
      userLogin: this.login,
      userEmail: this.email,
      password: this.pass,
      passwordRepeat: this.passRepeat
    });

    this.lg.loggedUser = this.user;
    this.lg.changeLoggedState();
  }
}
