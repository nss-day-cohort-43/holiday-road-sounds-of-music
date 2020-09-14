import {useParks} from './ParkProvider.js'
import {parkDetailHTML} from './ParkDetails.js'

const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".detailsBox")
const photoTarget = document.querySelector(".photoBox")

export const itineraryPreview = (parkName) => {
    return `<button class="park-details" value="${parkName}"> Details </button>`
}

// Listen for details button to be clicked and find the matching object from the parks array
eventHub.addEventListener("click", event => {
    // Ensure we only proceed it park-dtails button is selected.
    if (event.target.className === "park-details") {
        const selectedPark = event.target.value.split("-")[0]
        const parkArray = useParks()
        const parkMatcher = parkArray.filter((park) => {
            return park.fullName === selectedPark 
        })
        const matchingPark = parkMatcher[0]
        render(matchingPark)
    }
})


const render = (matchingPark) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML = parkDetailHTML(matchingPark)
}