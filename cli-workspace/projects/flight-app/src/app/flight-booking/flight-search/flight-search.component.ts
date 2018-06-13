import { FlightsLoadAction } from './../+state/flight-booking.actions';
import { Observable, Subscription, Subject } from 'rxjs';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FlightService, Flight} from '@flight-workspace/flight-api';
import { Store } from '@ngrx/store';
import { FlightBookingState } from '../+state/flight-booking.reducer';
import { FlightsLoadedAction, FlightUpdateAction } from '../+state/flight-booking.actions';
import { take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit, OnDestroy {


  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  flights$: Observable<Flight[]>
  flights: Flight[];

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private store: Store<FlightBookingState>,
    private flightService: FlightService) {
  }

  sub = new Subscription();
  closeSubject = new Subject();

  ngOnInit() {
    this.flights$ = this.store.select(root => root.flightBooking.flights);
    this.sub = this.flights$.pipe(takeUntil(this.closeSubject)).subscribe(flights => {
      this.flights = flights;
    })
  }

  ngOnDestroy(): void {
    //this.sub.unsubscribe();
    this.closeSubject.next();
  }

  search(): void {
    if (!this.from || !this.to) return;
    this.store.dispatch(new FlightsLoadAction(this.from, this.to, this.urgent));
  }

  delay(): void {

    this.flights$.pipe(take(1)).subscribe(flights => {
      const oldFlight = flights[0];
      
      const oldDate = new Date(oldFlight.date);
      const newDate = new Date(oldDate.getTime() + 1000 * 60 * 15);
      
      const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() }

      this.store.dispatch(new FlightUpdateAction(newFlight));

    });

    
  }

}
