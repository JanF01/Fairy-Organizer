import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

enableRipple(true);

const appRoutes: Routes = [
  {path:'', component: WelcomeComponent},
 {path:'login', component: LoginComponent},
 {path:'create', component: NewOrganizerComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewOrganizerComponent,
    WelcomeComponent,
    OrganizerComponent
  ],
  imports: [
    RouterModule.forRoot(
       appRoutes,
       {enableTracing: true}   
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
