import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { PingComponent } from './ping/ping.component';
import { PingService } from './ping/ping.service'

@NgModule({
  declarations: [
    MyApp,
    PingComponent,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [PingService]
})
export class AppModule {}
