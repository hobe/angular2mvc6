import { Component, View } from 'angular2/core';
import { Person } from '../model/Person';
import { DataService } from '../dataService';

@Component({
    selector: "people-list"
})
@View({
    templateUrl: 'app/people/people.html'
})
export class PeopleComponent {

    public people: Array<Person>;
    selectedPerson: Person;
    isLoading: boolean;

    constructor(public dataSvc: DataService) {
        this.selectedPerson = new Person();
        this.getData();
    }

    selectAll() {
        this.people.forEach(p => p.IsSelected = true);
    }


    getData() {
        this.isLoading = true;
        this.dataSvc.getData()
            .subscribe((people: Array<Person>) => {
                this.people = people;
                console.log(this.people.length);
            },
            err => console.log(err),
            () => this.isLoading = false);
    }

    showDetails(person: Person) {
        this.selectedPerson = person;
    }

    removeItems() {
        let newList: Array<Person> = [];
        this.people.forEach(p => {
            if (!p.IsSelected) { newList.push(p); }
        });
        this.people = newList;
    }
}