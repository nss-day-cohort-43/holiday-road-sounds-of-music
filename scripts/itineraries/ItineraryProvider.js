const eventHub = document.querySelector("main")

let itinerary = []

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

export const getItinerary = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedItinerary => {
            itinerary = parsedItinerary
        })

}

export const useItinerary = () => {
    return itinerary.slice()
}


export const saveItinerary = itineraryObj => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(itineraryObj)
    })
    .then(() => {
        return getItinerary
    })
    .then(dispatchStateChangeEvent)
}
