const carMakers = ['ford', 'toyota', 'chevy'];
const date = [new Date(), new Date()];

const carsByMake2 = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

const carsByMake: string[][] = [];

// Help with inference when extract values

const car = carMakers[0];
console.log(car)

const myCar = carMakers.pop();
console.log(myCar)

//Prevent incompatible values
//carMakers.push(4);

//Help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

//Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
//importantDates.push(100);



