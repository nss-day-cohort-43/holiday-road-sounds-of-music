// import { attractionsHTML } from "./AttractionDetails.js"

import { useAttractions } from "./AttractionProvider.js"

const attractionTarget = document.querySelector(".selectedAttraction")
const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".detailsBox")

eventHub.addEventListener("attractionChosen", event => {
    const chosenAttraction = event.detail.attractionThatWasChosen
    postedAttraction(chosenAttraction)
})

export const postedAttraction = (chosenAttraction) => {
    attractionTarget.innerHTML = `
    ${chosenAttraction}
    <button class="attractionDetailsButton" value="${chosenAttraction}">Details</button>`
}

eventHub.addEventListener ("click", event => {
    if (event.target.className === "attractionDetailsButton") {
        const selectedAttraction = event.target.value
        const attractionArray = useAttractions();
        const matchingAttraction = attractionArray.filter((attractionObj) => {
            return attractionObj.name === selectedAttraction
        })
        const matchedEntry = matchingAttraction[0]
        render(matchedEntry)
    }
})

const render = (attractionObj) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
    <section>
        <h3>Attraction: ${attractionObj.name}</h3>
            <p class="attraction-location">Location: ${attractionObj.city}, ${attractionObj.state}</p>
            <p class="attraction-description">Decription: ${attractionObj.description}</p>
    </section>
    `
}