// sending out the event/chosen park
// weather, photobox and itinerary are listening

import {getParks, useParks} from './ParkProvider.js'
import {itineraryPreview} from './Parks.js'


const eventHub = document.querySelector("main")
const selectTarget = document.querySelector(".filters__park")
const selectedTarget = document.querySelector(".selectedPark")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
    // This targets only the HTML element with the ID of "parkSelect" and execute only when element changed
    if (event.target.id === "parkSelect") {
        const selectedString = event.target.value
        const selectedZip = selectedString.split("-")[1]
        const selected = selectedString.split("-")[0]
        selectedTarget.innerHTML = ""
        selectedTarget.innerHTML += `
            ${selected}
            ${itineraryPreview(selected)}
            `
        const arrayOfParks = useParks()

        const parkObject = arrayOfParks.filter((park) => {
            if (park.fullName === selected) {
                const parkURLFinder = park.images[0].url
                return parkURLFinder
            }
        })
        const parkURL = parkObject[0].images[0].url
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                parkThatWasChosen: event.target.value,
                parkZip: selectedZip,
                parkURL: parkURL
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


const render = parksCollection => {
    selectTarget.innerHTML = `
            <select class="dropdown" id="parkSelect">
                <option value="0">Select a Park...</option>
                ${
                    parksCollection.map(park => {
                        return `<option value="${park.fullName}-${park.addresses[0].postalCode}">${park.fullName}</option>`
                    })
                }
            </select>
        `
}


export const ParkSelect = (stateKey) => {
    getParks(stateKey)
        .then(() => {
            const parks = useParks()
            render(parks)
        })
}