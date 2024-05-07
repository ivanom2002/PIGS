import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from "./home/home.component"; // Se agregó la importación del componente HomeComponent
import { CreacionRecordatorioComponent } from './creacion-recordatorio/creacion-recordatorio.component';
import { ElderProfileComponent } from "./elder-profile/elder-profile.component";
import { ElderInformationComponent } from './elder-information/elder-information.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'creacion-recordatorio', component: CreacionRecordatorioComponent },
  { path: 'elderProfile', component: ElderProfileComponent},
  { path: 'elderInformation', component: ElderInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
