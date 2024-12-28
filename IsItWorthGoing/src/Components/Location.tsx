const apiKey2 = import.meta.env.VITE_WEATHER_API_KEY;

export class Location {
    city: string
    state: string
    lat: string
    lon: string
    country: string

    constructor(city: string, state:string, lat:string, lon:string, country: string) {
        this.city = city;
        this.state = state;
        this.lat = lat;
        this.lon = lon;
        this.country = country;
    }

    getLat() {
        return this.lat;
    }

    getLon() {
        return this.lon;
    }

    getCity() {
        return this.city;
    }

    getState() {
        return this.state;
    }
    
    getCountry() {
        return this.country;
    }

    getTemperature() {
        let data;
        var request = {
            method: 'GET',
        };
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${apiKey2}&units=metric`, request)
        .then(response => response.json())
        .then(result => {return result.weather.feels_like})
        .catch(error => console.log('error', error));
    }
}