import { Component, Input } from '@angular/core';

import { Client } from '../../app/services/alice.response/client';

@Component({
  selector: 'client-details',
  templateUrl: 'client-details.html'
})
export class ClientDetailsComponent {

  @Input() clients: Client[];
}
