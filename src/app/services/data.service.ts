import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    getProducts$() {
        return this.http.get('/assets/data.json');
    }
}
