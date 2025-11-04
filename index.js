const coordinates = {
    lat: 59.33205044045725,
    lng: 18.064180761513633
}


const getData = async (lat, lng) => {
    await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`)
        .then(response => {
            modifyDOM(response.data)
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


const modifyDOM = (data) => {

    const latitudeElement = document.querySelector('.latitude');
    const longitudeElement = document.querySelector('.longitude');
    const temperatureElement = document.querySelector('.temperature');

    latitudeElement.textContent = `Latitude: ${data.latitude}`;
    longitudeElement.textContent = `Longitude: ${data.longitude}`;
    temperatureElement.textContent = `Temperature: ${data.current_weather.temperature}°C`;

}


getData(coordinates.lat, coordinates.lng);


