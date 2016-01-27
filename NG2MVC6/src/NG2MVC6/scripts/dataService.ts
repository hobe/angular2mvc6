import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Person } from './model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
    constructor(public http: Http) {
    }

    getData():Observable<Array<Person>> {
        return this.http
            .get('/api/data')
            .map((res: Response) => res.json())
            // this additional map is required to convert dateOfBirth to a valid js datetime
            .map((people: Array<Person>) => {
                if (people) {
                    people.forEach(person => {
                        person.DateOfBirth = new Date(person.DateOfBirth);
                    });
                }
                return people;
            }); 
    }

}