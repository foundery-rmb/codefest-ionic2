import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AliceApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login-page/login-page';
import { ClientProfile } from '../pages/client-profile/client-profile';
import { FundsPage } from '../pages/funds-page/funds-page';
import { LegalPersonaFundPage } from '../pages/legal-persona-fund-page/legal-persona-fund-page';
import { PortfolioMandatePage } from '../pages/portfolio-mandate-page/portfolio-mandate-page';
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
    LoginPage,
    WelcomePage,
    ClientProfile,
    FundsPage,
    LegalPersonaFundPage,
    PortfolioMandatePage
  ],
  imports: [
    IonicModule.forRoot(AliceApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AliceApp,
    LoginPage,
    WelcomePage,
    ClientProfile,
    FundsPage,
    LegalPersonaFundPage,
    PortfolioMandatePage
  ],
  providers: [AliceQueryService]
})
export class AppModule {}
