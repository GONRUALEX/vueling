import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetallAirport } from '@shared/models/interface/detallAirport';

@Component({
  selector: 'app-airports-detall',
  templateUrl: './airports-detall.component.html',
  styleUrls: ['./airports-detall.component.scss']
})
export class AirportsDetallComponent implements OnInit {
  public airport?: DetallAirport;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.airport = this.data.airport;
  }

}
