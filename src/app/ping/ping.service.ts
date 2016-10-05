import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppConstants } from '../config/constants';
import { Ping } from './ping';

@Injectable()
export class PingService {

    constructor (private http: Http) {}

    ping (): Observable<Ping> {
        return this.http.get(AppConstants.SERVER + '/ping')
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