import { Component, Input } from '@angular/core';

import { ClientFund } from '../../app/services/alice.response/client-fund';

@Component({
  selector: 'client-funds',
  templateUrl: 'client-funds.html'
})
export class ClientFunds {

  @Input() funds: ClientFund[];
}
