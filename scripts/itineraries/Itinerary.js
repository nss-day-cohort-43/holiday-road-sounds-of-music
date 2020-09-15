import {savedObject} from "./ItineraryForm.js"
import { saveItinerary } from "./ItineraryProvider.js"

const eventHub = document.querySelector("main")

eventHub.addEventListener('click', event => {  
    if (event.target.id === "saveItineraryButton") {
        checkElements()
    } 
})


//checks each div in itinerary preview ... if all fields are filled out, button will show
export const checkElements = () => {
    const checkEats = document.querySelector(".eatDetailsButton")
    const checkAttractions = document.querySelector(".attractionDetailsButton")
    const checkParks = document.querySelector(".park-details")
    if (checkEats && checkParks && checkAttractions) {
        const saveThis = savedObject()
        saveItinerary(saveThis)
    } 
    else {
        alert("Please select all three options")
    }
 }



