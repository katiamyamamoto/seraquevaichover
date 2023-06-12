import React from "react"
import { forecast, location } from "../services/apiResult";

    function Body () {
        const sendCity = async () => {
            const getLocation = await location("London");
            const cityLat = getLocation.results[0].latitude;
            const cityLon = getLocation.results[0].longitude;
            const getForecast = await forecast(cityLat, cityLon);
            return getForecast;
        };

        return (
            <>
            <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" placeholder="Digite a sua cidade" id="cidade"/>
                <button onClick={ () => sendCity() }>Enviar</button>
            </div>
            </>
        )
    }

export default Body;