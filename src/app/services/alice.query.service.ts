import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppConstants } from '../config/constants';
import { AliceResponse } from './alice.response';

@Injectable()
export class AliceQueryService {

    constructor(private http: Http) { }

    query(userQuery: string): Observable<AliceResponse[]> {
        return this.http.get(AppConstants.SERVER + '/query/' + userQuery)
            .map(this.toAliceResponses);
    }

    toAliceResponses(response: Response): AliceResponse[] {
        let clients: AliceResponse[] = [];

        let body: any[] = response.json();
        for (let entry of body) {
            clients.push(new AliceResponse(entry.Client, entry.Risk_profile_client, entry.Fund_count))
        }
        return clients;
    }
}