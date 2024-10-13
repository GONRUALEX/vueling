import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Airport } from '@shared/models/interface/airport';

@Component({
  selector: 'app-airports-list-render',
  templateUrl: './airports-list-render.component.html',
  styleUrls: ['./airports-list-render.component.scss']
})
export class AirportsListRenderComponent {

  @Input() airports: Airport[] = [];
  @Output() airportClicked = new EventEmitter<string>();

  onClickAirport(key: string): void {
    this.airportClicked.emit(key);
  }

  trackByAirports(index: number, airport: Airport): string {
    return airport.key;
  }
}
