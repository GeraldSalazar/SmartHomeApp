import { Component } from '@angular/core';
import { DoorsService } from '../services/doors.service';
import { LedsService } from '../services/leds.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  constructor(private ledsService: LedsService, private doorsService: DoorsService){}

  switchLight(ledID: number){
    this.ledsService.switchLED(ledID);
  }

  switchDoor(doorID: number){
    this.doorsService.switchDoor(doorID);
  }

  getLEDState(ledID: number): boolean{
    for(let led of this.ledsService.leds){
      if(led.id == ledID) return led.state;
    }
    return false
  }

}
