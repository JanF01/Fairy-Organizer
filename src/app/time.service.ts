import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  daysInAMonth: number = 2;
  dayOfTheWeek: number = 0;
  month: string = "";
  year: number;
  dateValue: Date = new Date("04/02/2020");


  constructor() { }

  setMonthYear(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  this.month = monthNames[this.dateValue.getMonth()];
  this.year = this.dateValue.getFullYear();
  
  }
   getDayInAMonth(){
    let date1 = this.dateValue;
      let date2 = new Date(date1.getFullYear(), date1.getMonth()+1, 0);
      this.daysInAMonth = date2.getDate();
   }

   getDay(){
     return this.dateValue.getDate();
   }
   getDayOfTheWeek(){
     this.dayOfTheWeek = this.dateValue.getUTCDay()-1;
   }


}
