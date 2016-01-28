import { Selectable } from './Selectable';

export class Person extends Selectable {
    public ID: number;
    public FirstName: string;
    public LastName: string;
    public DateOfBirth: any;

    constructor() {
        super();
    }
}
