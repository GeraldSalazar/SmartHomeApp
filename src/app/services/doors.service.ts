import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {

  constructor() { }

  public doors: any[] = [
    {id: 1, name: 'MAIN DOOR', state: false},
    {id: 2, name: 'DOOR ROOM 1', state: false},
    {id: 3, name: 'DOOR ROOM 2', state: false},
    {id: 4, name: 'BACK DOOR', state: false},
  ]


  switchDoor(doorID: number){
    this.doors.forEach(door => {
      if(door.id == doorID){
        door.state = !door.state
      }
    });
  }
}
