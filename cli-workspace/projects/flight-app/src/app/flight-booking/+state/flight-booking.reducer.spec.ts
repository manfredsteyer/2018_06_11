import { FlightBookingLoaded } from './flight-booking.actions';
import { flightBookingReducer, initialState } from './flight-booking.reducer';

describe('flightBookingReducer', () => {
  it('should work', () => {
    const action: FlightBookingLoaded = new FlightBookingLoaded({});
    const actual = flightBookingReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
