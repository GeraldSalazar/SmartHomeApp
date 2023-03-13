import { Component, Input } from '@angular/core';
import { LedsService } from 'src/app/services/leds.service';

@Component({
  selector: 'app-ledlight',
  templateUrl: './ledlight.component.html',
  styleUrls: ['./ledlight.component.scss']
})
export class LEDlightComponent {

  constructor(private ledsService: LedsService){}
  @Input('id') ledID!: number;
  @Input('name') ledName!: string;
  @Input('state') ledState!: boolean;



}
