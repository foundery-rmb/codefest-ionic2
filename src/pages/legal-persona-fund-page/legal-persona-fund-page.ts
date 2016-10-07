import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PortfolioMandatePage } from '../portfolio-mandate-page/portfolio-mandate-page';

@Component({
  selector: 'page-legal-persona-fund-page',
  templateUrl: 'legal-persona-fund-page.html'
})
export class LegalPersonaFundPage {

  constructor(public navCtrl: NavController) {}

  navigateForward() {
    this.navCtrl.push(PortfolioMandatePage);
  }
}
