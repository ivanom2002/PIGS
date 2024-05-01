import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { CreacionRecordatorioComponent } from './creacion-recordatorio/creacion-recordatorio.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> f1fae6c2982857a578d877d8576b149eed4e2949

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
<<<<<<< HEAD
    CreacionRecordatorioComponent
=======
    HomeComponent
>>>>>>> f1fae6c2982857a578d877d8576b149eed4e2949
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
