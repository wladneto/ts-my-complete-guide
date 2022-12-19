interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `${this.name} is my car.`;
    }
};

const drink = {
    color: 'brown',
    carboneted: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(`**Summary**\n${item.summary()}`)
};

printSummary(oldCivic)
printSummary(drink)