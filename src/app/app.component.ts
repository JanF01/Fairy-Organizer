import { Component } from '@angular/core';
import { VerificationService } from './verification.service';
import { GuardService } from './guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Organizer';
  state = 0;

  constructor(private verify: VerificationService, private guard: GuardService){
     guard.canActivate()
  }

  onStateChange(e){
    this.state=e;
  }

}
