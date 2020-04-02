import { Component, OnInit, Input } from '@angular/core';
import {faAngleLeft, faAngleRight, faArrowsAlt, faPlus, faCalendarAlt, faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-callendar',
  templateUrl: './callendar.component.html',
  styleUrls: ['./callendar.component.scss']
})
export class CallendarComponent implements OnInit {
  
  @Input() dateValue : Date = new Date();
  day: number;
  leftArrow = faAngleLeft;
  rightArrow = faAngleRight;
  faMove = faArrowsAlt;
  faPlus = faPlus;
  faCalendar = faCalendarAlt;
  faCalendarCheck = faCalendarCheck;

  days: Array<string> = [];
  amountOfDays: number = 31;
  daysBoxes: HTMLCollectionOf<HTMLElement>;
  daysInAMonth: number = 2;
  dayOfTheWeek: number = 0;
  month: string = "";
  year: number;

  excerptLength: number = 17;
  layout: string = "month";

  monthNames: Array<string> = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  missionName: string = "Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable. ";
  


  constructor( private time: TimeService) { 
     time.setMonthYear();
  
  }

  ngOnInit() {
    
  }

  ngAfterViewChecked(){
    setTimeout(()=>{
    this.fillInDays();
    this.setMissionName();
  },10);

  }



  fillInDays(){

    this.days.length = 0;

    this.day = this.time.getDay();
    this.time.getDayOfTheWeek();

    if(this.time.dayOfTheWeek==-1){
      this.time.dayOfTheWeek=6;
    }


      this.time.getDayInAMonth();
  
     if(this.layout=="month"){
     for(let i=0;i<this.time.dayOfTheWeek;i++){
       this.days.push("");
     } 
    }
  
    for(let i = this.day;i<=this.amountOfDays+this.day-1;i++){
      let y = i;
      if(i>this.time.daysInAMonth && this.layout=="month"){
          y = i-this.time.daysInAMonth;
      }
      if(y<10){
      this.days.push("0"+y);
      }
      else{
        this.days.push(y.toString());
      }
    }

  }


  setMissionName(){

    var mission = document.getElementsByClassName("mission");
    
    var place: number;

    var missionExcerpt: string;

    for(let i=0;i<mission.length;i++){
    

      missionExcerpt = this.missionName.substring(20,20+(this.excerptLength-1)) + "...";
      mission[i].innerHTML = missionExcerpt;

    }

  }

  changeDaysWidth(w: string){
    
    
    this.daysBoxes = document.getElementsByTagName("section") as HTMLCollectionOf<HTMLElement>;
    for(let i = 0;i<this.daysBoxes.length;i++){
      this.daysBoxes[i].style.width = w;
    } 

  }

  changeDaysHeight(h: string){

    this.daysBoxes = document.getElementsByTagName("section") as HTMLCollectionOf<HTMLElement>;
    for(let i = 0;i<this.daysBoxes.length;i++){
      this.daysBoxes[i].style.minHeight = h;
      this.daysBoxes[i].style.maxHeight = h;
    } 

  }


  setUpLayout(name: string,t: number){
     
  if(t){
    document.getElementsByTagName("header")[0].style.display="none";
    document.getElementById("cal").style.display="none";
    document.getElementById("loader").style.display="block";
  }

    switch(name){
   case 'month':

    this.layout = "month";
    this.amountOfDays = 31;
    this.fillInDays();
    this.excerptLength=17;
    this.setMissionName();
    setTimeout(()=>{
    this.changeDaysWidth("calc( 100% / 7 - 0.3em)");
    this.changeDaysHeight("calc( 95% / 5 )");
    document.getElementsByTagName("header")[0].style.display="flex";
    document.getElementById("cal").style.display="flex";
    document.getElementById("loader").style.display="none";
    },t);

    break;
    case 'ww':
      this.layout = "ww";
    this.amountOfDays = 14;
    this.fillInDays();
    this.excerptLength=27;
    this.setMissionName();
    setTimeout(()=>{
    this.changeDaysWidth("calc( 100% / 5 - 0.3em )");
    this.changeDaysHeight("calc( 95% / 2 )");
    document.getElementById("cal").style.display="flex";
    document.getElementById("loader").style.display="none";
    },t);
      break;
      case 'w':
        this.layout = "w";
        this.amountOfDays = 7;
        this.fillInDays();
        this.excerptLength=33;
        this.setMissionName();
        setTimeout(()=>{
        this.changeDaysWidth("calc( 100% / 4 - 0.3em )");
        this.changeDaysHeight("calc( 95% / 1.5 )");
        document.getElementById("cal").style.display="flex";
        document.getElementById("loader").style.display="none";
        },t);
      break;
      case 'd':
        this.layout = "d";
    this.amountOfDays = 1;
    this.fillInDays();
    this.excerptLength=40;
    this.setMissionName();
    setTimeout(()=>{
    this.changeDaysWidth("calc( 100% - 0.3em )");
    this.changeDaysHeight("calc( 95% / 1 )");
    document.getElementById("cal").style.display="flex";
    document.getElementById("loader").style.display="none";
    },t);
    break;

    }
  }

  changeLayoutMonth(){


    this.setUpLayout("month",1000);

    

  }

  changeLayoutTwoWeeks(){

    this.setUpLayout("ww",1000);


  }
  changeLayoutOneWeek(){

   this.setUpLayout("w",1000);


  }
  changeLayoutDay(){

    
    this.setUpLayout('d',1000);

  }

  showCalendar(){

    setTimeout(()=>{
    var calendar = document.getElementsByTagName("ejs-calendar") as HTMLCollectionOf<HTMLElement>;
    calendar[0].style.display = "block";
    var cd = document.getElementById("cd");
    cd.style.display="none";
    var search = document.getElementById("apply")
    search.style.display="block";
    
    setTimeout(()=>
    search.addEventListener("click",()=>{
      search.style.display = "none";
      calendar[0].style.display="none";
      cd.style.display="block";
    }),50
    );
  },200);

    
  
  
  }

  public onMouseDown(target: HTMLElement):void{
    target.classList.add('e-input-btn-ripple');
  }
  public onMouseUp(target: HTMLElement):void{
    let ele: HTMLElement = target;
    setTimeout(()=>{
    ele.classList.remove('e-input-btn-ripple');
    },500);
  }

  public focusIn(target: HTMLElement):void{
    target.parentElement.classList.add('e-input-focus');
  }
  public focusOut(target: HTMLElement):void{
    target.parentElement.classList.remove('e-input-focus');
  }
  
  changeDate(){
      this.fillInDays();
      this.setMissionName();
      this.setUpLayout(this.layout,0);
  }


  setMonthLast(){
    this.time.dateValue.setMonth(this.time.dateValue.getMonth()-1);
    this.time.setMonthYear();
    this.setUpLayout(this.layout,0);
  }

  setMonthNext(){
    this.time.dateValue.setMonth(this.time.dateValue.getMonth()+1);
    this.time.setMonthYear();
    this.setUpLayout(this.layout,0);
  }


}
