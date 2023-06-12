    export const location = async (city) => {
        const urlLocation = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`;
        const locationData = await fetch(urlLocation);
        const requestJson = await locationData.json();
        return requestJson;
    };
    export const forecast = async (lat, lon) => {
        const urlforecast = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=precipitation_probability_mean&forecast_days=3&timezone=America%2FSao_Paulo`
        const forecastData = await fetch(urlforecast);
        const requestJson = await forecastData.json()
        return requestJson;
    };