import { Component } from '@angular/core';

@Component({
    selector: 'alice-input',
    templateUrl: 'alice-input.html'
})
export class AliceInputComponent {

    userQuery = '';

    onsubmit() {
        console.log(this.userQuery);
    }
}