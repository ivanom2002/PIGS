import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
<<<<<<< HEAD
import { SignUpComponent } from './sign-up/sign-up.component' // Asegúrate de importar el componente SignUpComponent
import { CreacionRecordatorioComponent } from './creacion-recordatorio/creacion-recordatorio.component';
=======
import { SignUpComponent } from './sign-up/sign-up.component'
import { HomeComponent } from "./home/home.component";
>>>>>>> f1fae6c2982857a578d877d8576b149eed4e2949

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {path: 'creacion-recordatorio', component: CreacionRecordatorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
