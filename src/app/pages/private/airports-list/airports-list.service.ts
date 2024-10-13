import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Airport} from '@shared/models/interface/airport';
import { GenericService } from '@shared/services/genericService';
import { DetallAirport } from '@shared/models/interface/detallAirport';

@Injectable({providedIn: 'root'})
export class AirportsListService extends GenericService<Airport | DetallAirport>{

    constructor(protected http: HttpClient) {
        super(http);
    }

}
