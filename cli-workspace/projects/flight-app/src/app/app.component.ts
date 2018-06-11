import { authConfig } from './auth.config';
import { AuthService } from './shared/auth/auth.service';
import {Component} from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: OAuthService) { 
    this.authService.configure(authConfig);
    this.authService.tokenValidationHandler = new JwksValidationHandler();
    this.authService.loadDiscoveryDocumentAndTryLogin();
  }

}

