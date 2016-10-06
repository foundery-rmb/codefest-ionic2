import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AliceApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { ClientProfile } from '../pages/client-profile/client-profile';
import { PingComponent } from './ping/ping.component';
import { PingService } from './ping/ping.service';
import { AliceInputComponent } from './alice-input/alice-input.component';
import { ClientDetailsComponent } from '../components/client-details/client-details';
import { AliceQueryService } from './services/alice.query.service';

@NgModule({
  declarations: [
    AliceApp,
    PingComponent,
    AliceInputComponent,
    ClientDetailsComponent,
    WelcomePage,
    ClientProfile
  ],
  imports: [
    IonicModule.forRoot(AliceApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AliceApp,
    WelcomePage,
    ClientProfile
  ],
  providers: [PingService, AliceQueryService]
})
export class AppModule {}
