import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { AliceResponse } from '../../app/services/alice.response/response';
import { Client } from '../../app/services/alice.response/client';
import { FundsPage } from '../funds-page/funds-page';

@Component({
  selector: 'page-client-profile',
  templateUrl: 'client-profile.html'
})
export class ClientProfile {

  clients: Client[];

  constructor(private navCtrl: NavController, navParams: NavParams) {
    let observable: Observable<AliceResponse> = navParams.get('observable');
    observable.subscribe(
      aliceResponse => this.clients = aliceResponse.clients,
      error => console.log(error))
  }

  navigateForward() {
    this.navCtrl.push(FundsPage);
  }
}
