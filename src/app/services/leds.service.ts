import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LedsService {

  public leds: any[] = [
    {id: 1, name: 'ROOM1', state: true},
    {id: 2, name: 'ROOM2', state: false},
    {id: 3, name: 'LIVING ROOM', state: false},
    {id: 4, name: 'KITCHEN', state: false},
    {id: 5, name: 'BATHROOM', state: false},
  ]
  constructor() { }


  switchLED(ledID: number){
    this.leds.forEach(led => {
      if(led.id == ledID){
        led.state = !led.state
      }
    });
  }
}
