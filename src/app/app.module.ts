import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { PingComponent } from './ping/ping.component';
import { PingService } from './ping/ping.service'

@NgModule({
  declarations: [
    MyApp,
    PingComponent,
    Page1,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
  ],
  providers: [PingService]
})
export class AppModule {}
