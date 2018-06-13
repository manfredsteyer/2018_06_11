import { AppModule } from './../app.module';
import { Injectable } from '@angular/core';
import { DefaultFlightCancellingService } from './default-flight-cancelling.service';

@Injectable({
    providedIn: 'root',
    useClass: DefaultFlightCancellingService
})
export class FlightCancellingService {

    show(flightId: number): void { }

}
