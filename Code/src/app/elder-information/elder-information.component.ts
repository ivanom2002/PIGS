import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Map } from 'leaflet';

@Component({
  selector: 'app-elder-information',
  templateUrl: './elder-information.component.html',
  styleUrls: ['./elder-information.component.css']
})
export class ElderInformationComponent implements AfterViewInit {
  private map: Map;
  firstName: string = 'Luca Ian'; // Aquí puedes asignar el nombre que desees
  lastName: string = 'Rodríguez'; // Apellido paterno
  maternalLastName: string = 'Moreno'; // Apellido materno

  constructor() {
    this.map = {} as Map;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    });

    tiles.addTo(this.map);
  }
}
