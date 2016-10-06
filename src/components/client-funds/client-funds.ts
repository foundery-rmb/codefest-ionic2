import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ClientFund } from '../../app/services/alice.response/client-fund';

@Component({
  selector: 'client-funds',
  templateUrl: 'client-funds.html'
})
export class ClientFunds implements OnChanges {

  @Input() funds: ClientFund[];

  countedFunds: { key: string; value: number }[] = [];

  ngOnChanges(changes: SimpleChanges) {
    let funds = changes['funds'];
    if (!funds.currentValue) {
      return;
    }

    let countedFunds: { [key: string]: number } = {};
    for (let fund of funds.currentValue) {
      if (fund.Legal_persona_fund.length === 0) {
        continue;
      }
      if (!countedFunds[fund.Legal_persona_fund]) {
        countedFunds[fund.Legal_persona_fund] = 1;
      } else {
        countedFunds[fund.Legal_persona_fund] += 1;
      }
    }

    for (let fundKey in countedFunds) {
      this.countedFunds.push({ key: fundKey, value: countedFunds[fundKey] });
    }

    this.countedFunds.sort((n1, n2) => {
      if (n1 > n2) {
        return 1;
      }

      if (n1 < n2) {
        return -1;
      }

      return 0;
    });
  }
}
