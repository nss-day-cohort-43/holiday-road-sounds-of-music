// dropdown box html 
// event listener that dispatches the selection to the eventhub
// filtering drop down options by the state of chosen park 
// sending info to itinerary preview box 
// also listens to the chosen park 

import { getAttractions, useAttractions } from "./AttractionProvider.js"

//RICHIE 

const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".filteredAttraction")
const selectedTarget = document.querySelector(".selectedAttraction")

eventHub.addEventListener("change", event => {
    if (event.target.id === "attractionSelect") {
        selectedTarget.innerHTML = ""
        selectedTarget.innerHTML += `
            ${event.target.value}
            <button id="attractionDetails">Details</button>
        `
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const attractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractionsArray = useAttractions()
            render(attractionsArray)
        })
}

const render = attractionArray => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="attractionSelect">
			<option value="0">Select a Bizzare Attraction...</option>
			${
                attractionArray.map(eventect => {
                    return `<option value="${eventect.name}">${eventect.name}</option>`
        }).join("")
        }
		</select>
    `
}