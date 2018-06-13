import { Observable, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  switchMap,
  tap,
  startWith,
  map,
  distinctUntilChanged,
  combineLatest,
  filter,
  share
} from 'rxjs/operators';

@Component({
  selector: 'lookahead',
  templateUrl: './lookahead.component.html',
  styleUrls: ['./lookahead.component.css']
})
export class LookaheadComponent implements OnInit {
  inputs$: Observable<string>;
  flights$: Observable<Flight[]>;
  loading: boolean = false;
  control: FormControl = new FormControl();

  online: boolean = false;
  online$: Observable<boolean>;

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.inputs$ = this.control.valueChanges;

    this.online$ = interval(2000).pipe(
      startWith(0),
      map(_ => Math.random() < 0.5),
      distinctUntilChanged(),
      tap(value => (this.online = value)),
      share()
    );

    this.flights$ = this.inputs$.pipe(
      debounceTime(300),
      combineLatest(this.online$),
      map(tuple => ({ input: tuple[0], online: tuple[1] })),
      filter(obj => obj.online),
      map(obj => obj.input),
      tap(_ => (this.loading = true)),
      switchMap(v => this.flightService.find(v, '', false)),
      tap(_ => (this.loading = false))
    );
  }
}
