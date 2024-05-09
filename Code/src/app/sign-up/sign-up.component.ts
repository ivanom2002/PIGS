import { Component } from '@angular/core';
import {FirebaseService} from "../firebase.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private firebaseService: FirebaseService) {
  }


  async signupSubmit(event: Event) {
    event.preventDefault()
    alert("Se envia")
    const name = (document.getElementById('name') as HTMLInputElement).value
    const surname = (document.getElementById('surname') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const telephone = (document.getElementById('telephone') as HTMLInputElement).value
    const password = (document.getElementById('password') as HTMLInputElement).value
    const language = "ES"
    const role = "elder"

    this.firebaseService.register(name, surname, email, telephone, password, language, role).subscribe(response => {

    })
  }

}
