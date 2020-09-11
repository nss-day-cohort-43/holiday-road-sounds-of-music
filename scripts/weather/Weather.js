export const weatherHTML = (weatherDayTaco) => {
    return `
        <section class="card-day">
            <img src="http://openweathermap.org/img/wn/${weatherDayTaco.weather[0].icon}@2x.png" class="icons" alt="Weather Icon">
            <div>${weatherDayTaco.weather[0].description}<br>
            ${weatherDayTaco.main.temp}</div>
        </section>     
    `
}