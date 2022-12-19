import { faker } from "@faker-js/faker";
import { Mappeable } from "./CustomMap";

export class Company implements Mappeable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'green';

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }

    markerContent(): string {
        return `<b>Company</b>: ${this.name}<br>${this.catchPhrase}`
    }
}

