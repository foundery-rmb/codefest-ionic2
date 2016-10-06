import { Component } from '@angular/core';
import { AliceQueryService } from '../services/alice.query.service';
import { AliceResponse } from '../services/alice.response';

@Component({
    selector: 'alice-input',
    templateUrl: 'alice-input.html'
})
export class AliceInputComponent {

    userQuery = '';
    aliceResponses: AliceResponse[] = [];

    constructor(private aliceQueryService: AliceQueryService) { }

    onsubmit() {
        this.aliceQueryService.query(this.userQuery)
            .subscribe(
                aliceResponses => this.aliceResponses = aliceResponses,
                error => console.log(error));
    }
}