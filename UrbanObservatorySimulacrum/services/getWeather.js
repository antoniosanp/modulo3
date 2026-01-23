
export async function getWeather(longitud, latitud) {

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Number(latitud)}&longitude=${Number(longitud)}&current=temperature_2m,precipitation,wind_speed_10m`);

    const responseJSON = await response.json(); 

    return responseJSON.current
    
}