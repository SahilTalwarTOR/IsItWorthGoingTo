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

    async getTemperature() {
        let data;
        try {
        var request = {
            method: 'GET',
        };
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${apiKey2}&units=metric`, request)
        if(!response.ok) {
            throw new Error("HTTP ERROR");
        }
        const result = await response.json();
        return result.main.feels_like;
    } catch(error) {
        console.error("Error fetching, ", error);
        throw error;
    }
}
}