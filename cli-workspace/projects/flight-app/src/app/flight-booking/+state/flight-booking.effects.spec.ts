import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { FlightBookingEffects } from './flight-booking.effects';
import {
  LoadFlightBooking,
  FlightBookingLoaded
} from './flight-booking.actions';

import { Observable } from 'rxjs';

describe('FlightBookingEffects', () => {
  let actions$: Observable<any>;
  let effects$: FlightBookingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        FlightBookingEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(FlightBookingEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadFlightBooking({}) });
      expect(effects$.loadFlightBooking$).toBeObservable(
        hot('-a-|', { a: new FlightBookingLoaded({}) })
      );
    });
  });
});
