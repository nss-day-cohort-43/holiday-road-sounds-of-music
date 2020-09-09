// dropdown box html 
// event listener that dispatches the selection to the eventhub
// filtering drop down options by the state of chosen park 
// sending info to itinerary preview box 
// also listens to the chosen park 

import { getAttractions, useAttractions } from "./AttractionProvider.js"

//RICHIE 

const eventHub = document.querySelector("main")

eventHub.addEventListener("change", event => {
    if (event.target.id === "attractionSelect") {
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

const contentTarget = document.querySelector(".filteredAttraction")

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
        attractionArray.map(attractionObject => {
            return `<option value="${attractionObject.name}">${attractionObject.name}</option>`
        }).join("")
        }
		</select>
    `
}