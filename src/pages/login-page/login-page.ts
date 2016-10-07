import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

  navigateForward() {
    this.navCtrl.push(WelcomePage);
  }
}
