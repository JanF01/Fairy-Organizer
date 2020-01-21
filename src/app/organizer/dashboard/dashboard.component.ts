import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from "../../models/userInfo";
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  circlesImg: Array<string> = [];
  user: UserInfoModel;


  constructor(private lg: LoginService) {
    for(var i = 0;i<5;i++){
      this.circlesImg.push("assets/circle.png");
    }
   }

  ngOnInit(){
    this.user = this.lg.loggedUser;
   }



  circleMouseOver(n: number){
      this.circlesImg[n] = "assets/circle_full.png";
  }
  circleMouseOut(n: number){
    this.circlesImg[n] = "assets/circle.png";
}

}
