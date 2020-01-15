import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
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
    CallendarComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
