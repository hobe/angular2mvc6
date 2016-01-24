import { bootstrap } from 'angular2/platform/browser';
import { Component, View } from 'angular2/core';
import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';
import { Person } from './model';
import 'rxjs/add/operator/map';

@Component({
    selector: "my-app" 
})
@View({
    templateUrl: 'app/partials/app.html'
})
class AppComponent {
    people: Array<Person> = []; 

    constructor(public http: Http) {
        this.getData();
    }

    getData() {
        this.http.get('http://localhost:14373/api/data')
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
            }).
            subscribe(
                data => {
                    this.people = data;
                    console.log(this.people);
                },
                err => console.log(err)
            );
    }
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);