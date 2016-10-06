import { Component } from '@angular/core';
import { AliceQueryService } from '../services/alice.query.service';
import { AliceResponse } from '../services/alice.response/response';

@Component({
    selector: 'alice-input',
    templateUrl: 'alice-input.html'
})
export class AliceInputComponent {

    userQuery = '';
    aliceResponse: AliceResponse;

    constructor(private aliceQueryService: AliceQueryService) { }

    onsubmit() {
        this.aliceQueryService.query(this.userQuery)
            .subscribe(
                aliceResponse => this.aliceResponse = aliceResponse,
                error => console.log(error));
    }
}