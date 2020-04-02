import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: Array<string> = []

  constructor() { }

  ngOnInit() {

    this.goals.push("Example number 1");
    this.goals.push("Make Organizer Mobile App");
    this.goals.push("Example number 3");
    this.goals.push("Example number 4 shorter");
  }

}
