export const weatherHTML = (weatherDayTaco) => {
    return `
        <section class="card-day">
            <div class="icon">
            <img src="http://openweathermap.org/img/wn/${weatherDayTaco.weather[0].icon}@2x.png" alt="Weather Icon">
            </div>
            <p>${weatherDayTaco.weather[0].description}</p>
            <p>${weatherDayTaco.main.temp}</p>
        </section>     
    `
}