// creates HTML for one single attraction 
// in the details box 

const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".detailsBox")
const selectedTarget = document.querySelector(".selectedAttraction")

eventHub.addEventListener("attractionChosen", change => {
    if (event.target.id === "attractionDetails") {
        contentTarget.innerHTML += attractionsHTML(change)
    }
})

export const attractionsHTML = attractionObj => {
    return `
    <section>
        <h3>Attraction: ${attractionObj.name}</h3>
            <p class="attraction-location">Location: ${attractionObj.city}, ${attractionObj.state}</p>
            <p class="attraction-description">Decription: ${attractionObj.description}</p>
    </section>
    `
}

eventHub.addEventListener("detailsClicked", event => {
    if (event.target.id === "attractionDetails") {
        contentTarget.innerHTML += attractionsHTML(event.target.value)
    }
})