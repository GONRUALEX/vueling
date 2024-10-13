import { Component, OnInit } from '@angular/core';
import { AirportsListService } from './airports-list.service';
import { Airport } from '../../../shared/models/interface/airport';
import { Observable } from 'rxjs';
import { Config } from '@shared/config/config';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AirportsDetallComponent } from './airports-detall/airports-detall.component';
import { DetallAirport } from '@shared/models/interface/detallAirport';

@Component({
    selector: 'app-airports-list',
    templateUrl: './airports-list.component.html',
    styleUrls: ['./airports-list.component.scss']
  })
  export class AirportsListComponent implements OnInit {
    public airportsList$!: Observable<Airport[]> ;
  
    constructor(private _airportsListService: AirportsListService, private _dialog: MatDialog) {}
  
    ngOnInit(): void {
      this.loadAirports();
    }
  
    private loadAirports(): void {
      this.airportsList$ = this._airportsListService.getAll(Config.api.airports.getAll);
    }
  
    public clickAirport(key: string): void {
      this._airportsListService.getById(key, Config.api.airports.getById).subscribe({
        next: (airport: DetallAirport | Airport) => {
          const dialogRef = this._dialog.open(AirportsDetallComponent, {
            width: '400px',
            data: { 
              airport: airport
            }
          });   
        }
      });
    }
  }
