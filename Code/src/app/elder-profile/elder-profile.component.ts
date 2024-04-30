import { Component } from '@angular/core';
import { ElderUser } from './elderUser';
@Component({
  selector: 'app-elder-profile',
  templateUrl: './elder-profile.component.html',
  styleUrls: ['./elder-profile.component.css']
})
export class ElderProfileComponent {
  title = 'User Profile'
  elderUser1: ElderUser = {
    firstName: 'Pepe',
    lastName: 'Gonzalez',
    diseaseList: ['Diabetes', 'Reuma', 'Artrosis'],
    treatmentList: ['Insulina', 'Glucosamina', 'Artrostop']
  };
}
