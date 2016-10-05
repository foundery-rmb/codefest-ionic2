import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppConstants } from '../config/constants';

@Injectable()
export class AliceQueryService {

    constructor (private http: Http) {}

    query (userQuery: string) {
        this.http.get(AppConstants.SERVER + '/query/' + userQuery)

                    // TODO : REMOVE THIS!!!
                    .subscribe(
                        response => console.log(response.json()),
                        error => console.log(error)
                    );
    }
}