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
    console.log(taco)
    const savedHTML = taco.map(singleEntry => {
        return `<div class="tripCard"><h5 class="savedTrip">${singleEntry.nameType}</h5>
        <ul><li>${singleEntry.selectedEat}</li>
        <li>${singleEntry.selectedPark}</li>
        <li>${singleEntry.selectedAttraction}</li></ul></div>
        `
    })

    savedTarget.innerHTML +=  savedHTML.join("") + `<h4>Saved Itineraries</h4>` 
    
}

export const initalizeList = ( ) => {
    getItinerary()
        .then(() => {
            const itineraries = useItinerary()
            render(itineraries)
        })
}