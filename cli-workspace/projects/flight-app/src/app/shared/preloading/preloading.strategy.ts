import { delay, switchMap } from 'rxjs/operators';
import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
    
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        
        // of(true).pipe(delay(2000), switchMap(_ => null));
        
        // of(true).delay(2000).switchMap();

        if (route.data && route.data['preload']) {
            return fn();
        }
        return of(null);

    }
    
}