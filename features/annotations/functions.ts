const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message)
    }
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }) => {
    console.log("####\nlogWeather")
    console.log(forecast.date);
    console.log(forecast.weather);
    console.log("####\n")
}

const logWeather2 = ({ date, weather }: { date: Date, weather: string }) => {
    console.log("####\nlogWeather2")
    console.log(date);
    console.log(weather);
    console.log("####\n")
}

logWeather(todaysWeather)
logWeather2(todaysWeather)