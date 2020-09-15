import {getItinerary, useItinerary} from "./ItineraryProvider.js"


const eventHub = document.querySelector("main")
const savedTarget = document.querySelector(".saved")

eventHub.addEventListener('itineraryStateChanged', event => {  
    getItinerary()
        .then(() => {
            const itineraries = useItinerary()
            render(itineraries)
        })
        // .then(() => {
        //     render(itineraries)
        // })
}
)

const render = (taco) => {
    const arrayToMap = taco.reverse()
    const savedHTML = arrayToMap.map(singleEntry => {
        savedTarget.innerHTML = `<h4>Saved Itineraries</h4>`
        return `<div class="tripCard"><h5 class="savedTrip">${singleEntry.nameType}</h5>
        <ul>
            <li>${singleEntry.selectedPark}</li>
            <li>${singleEntry.selectedAttraction}</li>
            <li>${singleEntry.selectedEat}</li>
        </ul></div>
        `
    })
    savedTarget.innerHTML +=  savedHTML.join("")  
}

export const initalizeList = ( ) => {
    getItinerary()
        .then(() => {
            const itineraries = useItinerary()
            render(itineraries)
        })
}