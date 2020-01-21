import { Component, OnInit, Input } from '@angular/core';
import {faAngleLeft, faAngleRight, faArrowsAlt, faPlus} from '@fortawesome/free-solid-svg-icons';

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
  days: Array<string> = [];
  amountOfDays: number = 35;
  excerptLength: number = 17;
  layout: string = "month";
  daysBoxes: HTMLCollectionOf<HTMLElement>
  missionName: string = "Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable. ";
  


  constructor() { 

     this.fillInDays();
 
  }

  ngOnInit() {
    
  }
  ngAfterViewChecked(){
    this.setMissionName();
  }


  fillInDays(){

    this.days.length = 0;

    this.day = this.dateValue.getUTCDay();

    for(let i = this.day;i<=this.amountOfDays+this.day;i++){
      let y = i;
      if(i>this.amountOfDays-4 && this.layout=="month"){
          y = i-(this.amountOfDays-4);
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
    
      place = Math.floor(Math.random()*this.missionName.length-this.excerptLength);

      missionExcerpt = this.missionName.substring(place,place+(this.excerptLength-1)) + "...";
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

  changeLayoutMonth(){

    document.getElementsByTagName("header")[0].style.display="flex";
    document.getElementById("cal").style.display="none";
    document.getElementById("loader").style.display="block";

    this.layout = "month";
    this.amountOfDays = 35;
    this.fillInDays();
    this.excerptLength=17;
    this.setMissionName();
    setTimeout(()=>{
    this.changeDaysWidth("calc( 100% / 7 - 0.1em )");
    this.changeDaysHeight("calc( 95% / 5 )");
    document.getElementById("cal").style.display="flex";
    document.getElementById("loader").style.display="none";
    },1000);

  }

  changeLayoutTwoWeeks(){

    document.getElementsByTagName("header")[0].style.display="none";
    document.getElementById("cal").style.display="none";
    document.getElementById("loader").style.display="block";

    this.layout = "ww";
    this.amountOfDays = 14;
    this.fillInDays();
    this.excerptLength=27;
    this.setMissionName();
    setTimeout(()=>{
    this.changeDaysWidth("calc( 100% / 5 - 0.1em )");
    this.changeDaysHeight("calc( 95% / 2 )");
    document.getElementById("cal").style.display="flex";
    document.getElementById("loader").style.display="none";
    },1000);


  }
  changeLayoutOneWeek(){

    document.getElementsByTagName("header")[0].style.display="none";
    document.getElementById("cal").style.display="none";
    document.getElementById("loader").style.display="block";

    this.layout = "w";
    this.amountOfDays = 7;
    this.fillInDays();
    this.excerptLength=33;
    this.setMissionName();
    setTimeout(()=>{
    this.changeDaysWidth("calc( 100% / 4 - 0.1em )");
    this.changeDaysHeight("calc( 95% / 1.5 )");
    document.getElementById("cal").style.display="flex";
    document.getElementById("loader").style.display="none";
    },1000);


  }
  changeLayoutDay(){

    document.getElementsByTagName("header")[0].style.display="none";
    document.getElementById("cal").style.display="none";
    document.getElementById("loader").style.display="block";
    
    this.layout = "d";
    this.amountOfDays = 1;
    this.fillInDays();
    this.excerptLength=40;
    this.setMissionName();
    setTimeout(()=>{
    this.changeDaysWidth("calc( 100% - 0.1em )");
    this.changeDaysHeight("calc( 95% / 1 )");
    document.getElementById("cal").style.display="flex";
    document.getElementById("loader").style.display="none";
    },1000);

  }

  showCalendar(){
    var calendar = document.getElementsByTagName("ejs-calendar") as HTMLCollectionOf<HTMLElement>;
    calendar[0].style.display = "block";
    var btn = document.getElementById("apply")
    btn.style.display="block";
    
    btn.addEventListener("click",()=>{
      btn.style.display = "none";
      calendar[0].style.display="none";
    })

    
  
  
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
  
}
