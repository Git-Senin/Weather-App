export function FormatTemperature(n, measurement) {
    return `${n.toPrecision(4)}°${measurement}`;
}

export function KelvinToCelsius(n) {
    return (n - 273.15);
}

export function KelvinToFahrenheit(n) {
    return ((n - 273.15) * 9/5 + 32);
}