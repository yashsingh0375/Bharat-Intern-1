

    let x=prompt("Enter your city name")
    document.addEventListener('DOMContentLoaded', () => {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${x}&limit=5&appid=2d6fcf0b5ddd6a6a70b37edfa060ac72`
        
        const weatherInfo = document.getElementById('weather-info');
        
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
            const description = data.weather[0].description;
            
            weatherInfo.innerHTML = `
            <p>City: ${cityName}</p>
            <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
            });
        });
        
