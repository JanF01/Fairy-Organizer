import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewOrganizerComponent } from './new-organizer/new-organizer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { OrganizerComponent } from './organizer/organizer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './organizer/dashboard/dashboard.component';
import { CallendarComponent } from './organizer/callendar/callendar.component';
import { GoalsComponent } from './organizer/goals/goals.component';

import { VerificationService } from "./verification.service";
import { GuardService } from "./guard.service";



enableRipple(true);

const appRoutes: Routes = [
  {path:'', component: WelcomeComponent, outlet: "main"},
 {path:'login', component: LoginComponent, outlet: "main"},
 {path:'create', component: NewOrganizerComponent, outlet: "main"},
 {path: 'calendary', component: OrganizerComponent, outlet: "main",
 children:[
   {path: '', component: CallendarComponent, outlet: 'organizerLayout'}
 ]},
 {path: 'dashboard', component: OrganizerComponent, outlet: "main",
 children:[
   {path: '', component: DashboardComponent, outlet: 'organizerLayout'}
 ]},
 {path: 'goals', component: OrganizerComponent, outlet: "main",
 children:[
   {path: '', component: GoalsComponent, outlet: 'organizerLayout'}
 ]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewOrganizerComponent,
    WelcomeComponent,
    OrganizerComponent,
    DashboardComponent,
    CallendarComponent,
    GoalsComponent,
  ],
  imports: [
    RouterModule.forRoot(
       appRoutes,
    ),
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    HttpClientModule,
  ],
  providers: [VerificationService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
