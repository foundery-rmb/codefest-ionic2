import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AliceQueryService } from '../services/alice.query.service';
import { AliceResponse } from '../services/alice.response/response';
import { ClientProfile } from '../../pages/client-profile/client-profile';

@Component({
    selector: 'alice-input',
    templateUrl: 'alice-input.html'
})
export class AliceInputComponent {

    userQuery = '';
    aliceResponse: AliceResponse;

    constructor(private navCtrl: NavController, private aliceQueryService: AliceQueryService) { }

    onsubmit() {
        this.navCtrl.push(ClientProfile, { observable: this.aliceQueryService.query(this.userQuery) });
    }
}