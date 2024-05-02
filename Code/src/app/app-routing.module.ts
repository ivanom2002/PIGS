import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from "./home/home.component"; // Se agregó la importación del componente HomeComponent
import { CreacionRecordatorioComponent } from './creacion-recordatorio/creacion-recordatorio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'creacion-recordatorio', component: CreacionRecordatorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
