import {Component, OnInit} from '@angular/core';
import { ElderUser } from './elderUser';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../service/send.service";
@Component({
  selector: 'app-elder-profile',
  templateUrl: './elder-profile.component.html',
  styleUrls: ['./elder-profile.component.css']
})
export class ElderProfileComponent implements OnInit{
  userData:any
  constructor(private dataService: DataService) {  }

  title = 'User Profile'
  elderUser1: ElderUser = {
    firstName: 'Pepe',
    lastName: 'Gonzalez',
    diseaseList: ['Diabetes', 'Reuma', 'Artrosis'],
    treatmentList: ['Insulina', 'Glucosamina', 'Artrostop']
  };

  showDiseasesDropdown = false;
  showTreatmentsDropdown = false;
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  toggleDiseasesDropdown() {
    this.showDiseasesDropdown = !this.showDiseasesDropdown;
  }

  toggleTreatmentsDropdown() {
    this.showTreatmentsDropdown = !this.showTreatmentsDropdown;
  }

  ngOnInit(): void {
    this.dataService.data$.subscribe(data => {
      this.userData = data
    })
  }
}


