import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { FlightEditComponent } from './../../flight-booking/flight-edit/flight-edit.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface ExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<ExitComponent> {
    canDeactivate(component: ExitComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> {
        
        return component.canExit();

    }
}