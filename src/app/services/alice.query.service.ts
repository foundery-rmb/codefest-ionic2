import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppConstants } from '../config/constants';
import { AliceResponse } from './alice.response/response';

@Injectable()
export class AliceQueryService {

    constructor(private http: Http) { }

    query(userQuery: string): Observable<AliceResponse> {
        return this.http.get(AppConstants.SERVER + '/query/' + userQuery)
            .map(this.toAliceResponses);
    }

    toAliceResponses(response: Response): AliceResponse {
        return response.json();
    }
}