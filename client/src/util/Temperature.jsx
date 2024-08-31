export default class Temperature {
    constructor(n = 0, measurement = "K"){
        this.n = n;
        this.measurement = measurement;
    }

    setTemperature(n) {
        if(n === null) return null
        this.n = n;
        return this;
    }

    formatTemperature() {
        return `${this.n.toPrecision(4)}°${this.measurement}`;
    }
    
    kelvinToCelsius() {
        this.n = (this.n - 273.15);
        this.measurement = 'C'
        return this;
    }
    
    kelvinToFahrenheit() {
        this.n = ((this.n - 273.15) * 9/5 + 32);
        this.measurement = 'F'
        return this;
    }
}
