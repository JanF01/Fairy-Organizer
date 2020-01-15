import { Component, OnInit } from '@angular/core';
import { faKey,faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../login.service';

@Component({
  selector: 'app-new-organizer',
  templateUrl: './new-organizer.component.html',
  styleUrls: ['./new-organizer.component.scss']
})
export class NewOrganizerComponent implements OnInit {
 
  login: string;
  pass: string;
  email: string;

  faKey = faKey;
  faHatWizard = faHatWizard;


  constructor(private lg: LoginService) {
    this.login = '';
    this.pass = '';
    this.email = '';

   }

  ngOnInit() {
  }

  logValue(){
    let loginInput = document.getElementsByTagName('Input') as HTMLCollectionOf<HTMLElement>;
    if(this.login.length>5){
       loginInput[0].style.borderBottomColor="green";
       console.log("git");
    }


  }
  checkLogin(){
    this.lg.changeLoggedState();
    }
}
