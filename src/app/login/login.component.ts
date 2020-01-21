import { Component, OnInit} from '@angular/core';
import { faKey,faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../login.service';
import { UserInfoModel } from '../models/userInfo';

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
  user: UserInfoModel;

  constructor(private lg: LoginService) {
    this.login = '';
    this.pass = '';
  }

  ngOnInit() {}

  checkLogin() {
    this.user = new UserInfoModel({
      userId: "12$d",
      userLogin: this.login,
      userEmail: "",
      password: this.pass,
      passwordRepeat: this.pass
    });


    this.lg.loggedUser = this.user;

    this.lg.changeLoggedState();
  }

}
