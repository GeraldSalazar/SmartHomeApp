import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DeviceInfo } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {

  serverAddress: string = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

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

  getMessage(): Observable<DeviceInfo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<DeviceInfo>(this.serverAddress+'login', {headers: headers});
  }

  
}
