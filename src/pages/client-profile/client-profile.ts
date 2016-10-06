import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { AliceResponse } from '../../app/services/alice.response/response';
import { Client } from '../../app/services/alice.response/client';
import { ClientFund } from '../../app/services/alice.response/client-fund';
import { ClientDetailsComponent } from '../../components/client-details/client-details';

@Component({
  selector: 'page-client-profile',
  templateUrl: 'client-profile.html'
})
export class ClientProfile {

  clients: Client[];

  // TODO : Move this into the client-details components
  clientFunds: ClientFund[];

  constructor(navParams: NavParams) {
    let observable: Observable<AliceResponse> = navParams.get('observable');
    observable.subscribe(
      aliceResponse => { this.clients = aliceResponse.clients; this.clientFunds = this.clients[0].funds; },
      error => console.log(error))
  }
}
