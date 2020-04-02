import { Component, OnInit } from '@angular/core';
import { VerificationService, UserDetails } from 'src/app/verification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  circlesImg: Array<string> = [];
  user: UserDetails

  constructor(private verify: VerificationService) {
    for(var i = 0;i<5;i++){
      this.circlesImg.push("assets/circle.png");
    }
   }

  ngOnInit(){
      this.user = this.verify.getUserDetails();
   }



  circleMouseOver(n: number){
      this.circlesImg[n] = "assets/circle_full.png";
  }
  circleMouseOut(n: number){
    this.circlesImg[n] = "assets/circle.png";
}

}
