import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Ping } from './ping';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PingService {

    constructor (private http: Http) {}

    ping (): Observable<Ping> {
        return this.http.get('http://52.164.230.238:3000/ping')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData (response: Response) {
        return new Ping(response.text());
    }

    private handleError (error: any) {
        console.log(error);
        return Observable.throw('error');
    }
}