import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AliceApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { PingComponent } from './ping/ping.component';
import { PingService } from './ping/ping.service'

@NgModule({
  declarations: [
    AliceApp,
    PingComponent,
    WelcomePage,
  ],
  imports: [
    IonicModule.forRoot(AliceApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AliceApp,
    WelcomePage,
  ],
  providers: [PingService]
})
export class AppModule {}
