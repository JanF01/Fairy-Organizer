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
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot(
       appRoutes,
       {enableTracing: true}   
    ),
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
