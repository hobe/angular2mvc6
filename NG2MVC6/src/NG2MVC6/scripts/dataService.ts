import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Person } from './model';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
    constructor(public http: Http) {
    }

    getData() {
        return this.http.get('http://localhost:14373/api/data')
            .map(res => (<Response>res).json())
            .map((people: Array<any>) => {
                let result: Array<Person> = [];
                if (people) {
                    people.forEach(person => {
                        result.push(
                            new Person(
                                person.id,
                                person.firstName,
                                person.lastName,
                                new Date(person.dateOfBirth)));
                    });
                }

                return result;
            });
    }

}