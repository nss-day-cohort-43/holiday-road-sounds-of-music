export const weatherHTML = (weatherDayTaco) => {
    return `
        <section class="card-day">
            <img src="http://openweathermap.org/img/wn/${weatherDayTaco.weather[0].icon}@2x.png" class="icon" alt="Weather Icon">
            <p>${weatherDayTaco.weather[0].description}</p>
            <p>${weatherDayTaco.main.temp}</p>
        </section>     
    `
}