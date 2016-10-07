import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LegalPersonaFundPage } from '../legal-persona-fund-page/legal-persona-fund-page';

@Component({
  selector: 'page-funds-page',
  templateUrl: 'funds-page.html'
})
export class FundsPage {

  constructor(public navCtrl: NavController) {}

  navigateForward() {
    this.navCtrl.push(LegalPersonaFundPage);
  }
}
