import { Component } from '@angular/core';
import { PingService } from './ping.service'

@Component({
    selector: 'ping-pong',
    templateUrl: 'ping.html'
})
export class PingComponent {

    count: number;
    text: string;

    constructor(private pingService: PingService) {
        this.count = 0;
        this.text = 'PING';
    }

    ping () {
        let text = ['PING', 'PONG'];
        this.pingService.ping()
                        .subscribe(
                            ping => { this.count++; this.text = text[this.count % 2] },
                            error => this.text = error
                        );
    }
}