import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { CameraComponent } from './home-layout/devices/camera/camera.component';
import { LEDlightComponent } from './home-layout/devices/ledlight/ledlight.component';
import { DoorComponent } from './home-layout/devices/door/door.component';
import { DevicesStatusComponent } from './devices-status/devices-status.component';
import { LedsStatusInfoComponent } from './devices-status/leds-status-info/leds-status-info.component';
import { DoorsStatusInfoComponent } from './devices-status/doors-status-info/doors-status-info.component';
import { CameraStatusInfoComponent } from './devices-status/camera-status-info/camera-status-info.component';
import { LedsService } from './services/leds.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    CameraComponent,
    LEDlightComponent,
    DoorComponent,
    DevicesStatusComponent,
    LedsStatusInfoComponent,
    DoorsStatusInfoComponent,
    CameraStatusInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
