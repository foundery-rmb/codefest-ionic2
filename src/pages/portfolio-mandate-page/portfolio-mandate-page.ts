import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-portfolio-mandate-page',
  templateUrl: 'portfolio-mandate-page.html'
})
export class PortfolioMandatePage {

  constructor(public navCtrl: NavController) { }

  navigateHome() {
    this.navCtrl.push(WelcomePage);
  }

}
