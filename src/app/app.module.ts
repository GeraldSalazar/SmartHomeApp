import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { CameraComponent } from './home-layout/devices/camera/camera.component';
import { LEDlightComponent } from './home-layout/devices/ledlight/ledlight.component';
import { DoorComponent } from './home-layout/devices/door/door.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    CameraComponent,
    LEDlightComponent,
    DoorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
