import { bootstrap } from 'angular2/platform/browser';
import { Component, View } from 'angular2/core';
import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';
import { Person } from './model';
import { DataService } from './dataService';
import 'rxjs/add/operator/map';

@Component({
    selector: "my-app" 
})
@View({
    templateUrl: 'app/partials/app.html'
})
class AppComponent {
    public people: Array<Person>;
    isLoading: boolean;

    constructor(public dataSvc : DataService) {
        this.getData();
    }

    getData() {
        this.isLoading = true;
        this.dataSvc.getData()
            .subscribe((people: Array<Person>) => {
                this.people = people;
                console.log(this.people.length);
            },
            err => console.log(err),
            () => this.isLoading = false );
    }

    selectAll() {
        this.people.forEach(p => p.IsSelected = true);
    }

    showDetails(person: Person) {
        alert(person.LastName + ' is ' + person.IsSelected);
    }

    removeItems() {
        let newList : Array<Person> = [];
        this.people.forEach(p => {
            if (!p.IsSelected) { newList.push(p); }
        });
        this.people = newList;
    }
}

bootstrap(AppComponent, [HTTP_PROVIDERS, DataService]);