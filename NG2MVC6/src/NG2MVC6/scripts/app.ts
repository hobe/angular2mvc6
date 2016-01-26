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
    people: Array<Person> = []; 

    constructor(public dataSvc : DataService) {
        this.getData();
    }

    getData() {
        this.dataSvc.getData()
            .subscribe(
                data => {
                    this.people = data;
                    console.log(this.people);
                },
                err => console.log(err)
            );
    }
}

bootstrap(AppComponent, [HTTP_PROVIDERS, DataService]);