import {Component, OnInit} from '@angular/core';
import {AirportsListService} from './airports-list.service';
import {Airport} from './airport';

@Component({
    selector: 'app-airports-list',
    templateUrl: './airports-list.component.html',
    styleUrls: ['./airports-list.component.scss']
})
export class AirportsListComponent implements OnInit{
    public airportsList?: Airport[];
    public error?: string;
    constructor(private airportsListService: AirportsListService) {
    }

    public ngOnInit(): void {
        this.airportsListService.getAllAirports().then((res) => {
            this.airportsList = res;
        }).catch((error) => {
            this.error = error.message;
        });
    }

    public async clickAirport(key: string): Promise<void> {
        const airport = await this.airportsListService.getAirport(key);
        console.log(airport);
    }

}
