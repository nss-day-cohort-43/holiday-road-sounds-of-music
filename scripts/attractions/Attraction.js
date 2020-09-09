// creates HTML for one single attraction 
// in the details box 

const eventHub = document.querySelector("main")

export const attractionsHTML = attractionObj => {
    return `
    <section>
        <h3>Attraction: ${attractionObj.name}</h3>
            <p class="attraction-location">Location: ${attractionObj.city}, ${attractionObj.state}</p>
            <p class="attraction-description">Decription: ${attractionObj.description}</p>
    </section>
    `
}