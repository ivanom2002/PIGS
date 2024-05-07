import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../firebase.service";
import {Router} from "@angular/router";
import {DataService} from "../service/send.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private firebaseService: FirebaseService, private dataService: DataService,
  private router:Router) {  }

userData: any

  async onSubmit(event: Event) {
    event.preventDefault()
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    this.firebaseService.login(username, password).subscribe(
      response => {
      this.userData = response
        const uid = this.userData.userFirebase.uid
        this.firebaseService.getUser(uid).subscribe(
          userData => {
            console.log(userData)
            if(userData != null) {
              this.dataService.setData(userData)
              this.router.navigateByUrl('/elderProfile')
            }
          }
        )
      }
    )
  }

  ngOnInit(): void {
    if (this.userData != null) {
      console.log(this.userData)
    }
  }
}
