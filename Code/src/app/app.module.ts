import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { CreacionRecordatorioComponent } from './creacion-recordatorio/creacion-recordatorio.component';
import { HomeComponent } from './home/home.component';
import { ElderProfileComponent } from './elder-profile/elder-profile.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CreacionRecordatorioComponent,
    HomeComponent,
    ElderProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

