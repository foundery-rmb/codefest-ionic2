import { Component } from '@angular/core';
import { AliceQueryService } from '../services/alice.query.service';

@Component({
    selector: 'alice-input',
    templateUrl: 'alice-input.html'
})
export class AliceInputComponent {

    userQuery = '';

    constructor (private aliceQueryService: AliceQueryService) {}

    onsubmit() {
        console.log(this.userQuery);
        this.aliceQueryService.query(this.userQuery);
    }
}