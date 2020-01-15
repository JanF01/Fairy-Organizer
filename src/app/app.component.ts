import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Organizer';
  logged:boolean = false;

  constructor(private lg: LoginService){

      this.logged = this.lg.logged;
      
      this.lg.loggedValue.subscribe(value=>{
        this.logged = value;
      })
  }

}
