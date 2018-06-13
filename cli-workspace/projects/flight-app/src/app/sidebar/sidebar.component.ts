import { FlightCancellingService } from './../flight-cancelling/flight-cancelling.service';
import { Component } from '@angular/core';
import { MicroAppLoaderService } from './micro-app-loader.service';


@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {

  constructor(
    private fcs: FlightCancellingService,
    private loader: MicroAppLoaderService) {
  }

  cancel(): void {
    this.fcs.show(4711);
  }

  load(): void {
    this.loader.load();
  }
}
