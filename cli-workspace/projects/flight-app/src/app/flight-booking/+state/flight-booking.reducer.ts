import { Action } from '@ngrx/store';
import {
  FlightBookingActions,
  FlightBookingActionTypes
} from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';

/**
 * Interface for the 'FlightBooking' data used in
 *  - FlightBookingState, and
 *  - flightBookingReducer
 */
export interface FlightBookingData {
  flights: Flight[];
}

/**
 * Interface to the part of the Store containing FlightBookingState
 * and other information related to FlightBookingData.
 */
export interface FlightBookingState {
  readonly flightBooking: FlightBookingData;
}

export const initialState: FlightBookingData = {
  flights: []
};

export function flightBookingReducer(
  state = initialState,
  action: FlightBookingActions
): FlightBookingData {
  
  switch (action.type) {
    case FlightBookingActionTypes.FlightsLoadedAction: {
      return { ...state, flights: action.flights }
    }
    case FlightBookingActionTypes.FlightUpdateAction: {
      const newFlight = action.flight;
      const oldFlights = state.flights;

      const idx = oldFlights.findIndex(f => f.id === newFlight.id);
      const newFlights: Flight[] = [
        ...oldFlights.slice(0,idx),
        newFlight,
        ...oldFlights.slice(idx+1),
      ];

      return { ...state, flights: newFlights }
    }
    default:
      return state;
  }

}
