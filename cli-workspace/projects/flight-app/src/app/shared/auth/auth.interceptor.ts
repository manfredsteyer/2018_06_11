import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private router: Router) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (req.url.startsWith('http://www.angular.at/api')) {
            let headers = req.headers.set('Authorization', 'Dummy XXYYZZ');
            req = req.clone({ headers });
        }

        return next.handle(req).pipe(catchError(e => this.handleError(e)));
    
    }

    private handleError(e: HttpErrorResponse) {
        if (e.status === 401 || e.status === 403) {
            this.router.navigate(['/home', {needsLogin: true}]);
        }

        return throwError(e);
    }
}