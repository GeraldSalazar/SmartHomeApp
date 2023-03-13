import { Component } from '@angular/core';
import { DoorsService } from '../services/doors.service';
import { LedsService } from '../services/leds.service';

@Component({
  selector: 'app-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent {


  constructor(public ledsService: LedsService, public doorsService: DoorsService){
  }
}
