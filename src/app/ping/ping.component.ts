import { Component } from '@angular/core';
import { PingService } from './ping.service'

@Component({
    selector: 'ping-pong',
    templateUrl: 'ping.html'
})
export class PingComponent {

    text: string;

    constructor(private pingService: PingService) {
        this.text = '';
    }

    ping () {
        this.pingService.ping()
                        .subscribe(
                            ping => this.text = ping.text,
                            error => this.text = error
                        );
    }
}