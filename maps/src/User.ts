import { faker } from "@faker-js/faker";
import { Mappeable } from "./CustomMap";

export class User implements Mappeable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor() {
        this.name = faker.name.fullName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `<b>User</b>: ${this.name}`
    }

}

