import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { CameraComponent } from './home-layout/devices/camera/camera.component';
import { LEDlightComponent } from './home-layout/devices/leds-container/ledlight/ledlight.component';
import { DoorComponent } from './home-layout/devices/doors-container/door/door.component';
import { DoorsContainerComponent } from './home-layout/devices/doors-container/doors-container.component';
import { LedsContainerComponent } from './home-layout/devices/leds-container/leds-container.component';
import { DevicesStatusComponent } from './devices-status/devices-status.component';
import { LedsStatusInfoComponent } from './devices-status/leds-status-info/leds-status-info.component';
import { DoorsStatusInfoComponent } from './devices-status/doors-status-info/doors-status-info.component';
import { CameraStatusInfoComponent } from './devices-status/camera-status-info/camera-status-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    CameraComponent,
    LEDlightComponent,
    DoorComponent,
    DoorsContainerComponent,
    LedsContainerComponent,
    DevicesStatusComponent,
    LedsStatusInfoComponent,
    DoorsStatusInfoComponent,
    CameraStatusInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
