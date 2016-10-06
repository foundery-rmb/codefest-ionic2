import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AliceApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { ClientProfile } from '../pages/client-profile/client-profile';
import { AliceInputComponent } from './alice-input/alice-input.component';
import { ClientDetailsComponent } from '../components/client-details/client-details';
import { ClientFunds } from '../components/client-funds/client-funds';
import { AliceQueryService } from './services/alice.query.service';

@NgModule({
  declarations: [
    AliceApp,
    AliceInputComponent,
    ClientDetailsComponent,
    ClientFunds,
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
  providers: [AliceQueryService]
})
export class AppModule {}
