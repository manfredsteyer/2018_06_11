import { Action } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  FlightsLoadAction = '[FlightBooking] FlightsLoadAction',
  FlightsLoadedAction = '[FlightBooking] FlightsLoadedAction',
  FlightUpdateAction = '[FlightBooking] FlightUpdateAction'
}

export class FlightsLoadedAction {
  readonly type = FlightBookingActionTypes.FlightsLoadedAction;
  constructor(readonly flights: Flight[]) { }
}

export class FlightUpdateAction {
  readonly type = FlightBookingActionTypes.FlightUpdateAction;
  constructor(readonly flight: Flight) { }
}

export class FlightsLoadAction {
  readonly type = FlightBookingActionTypes.FlightsLoadAction
  constructor(readonly from: string, readonly to: string, readonly urgent: boolean) { }
}

export type FlightBookingActions = FlightsLoadedAction | FlightUpdateAction | FlightsLoadAction; /* | FlightsLoadErrorAction | ... */;


  
