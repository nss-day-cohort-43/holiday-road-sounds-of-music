//hold details button in eatery. 
//click event established on details button
//
import {useEateries} from "./EateryProvider.js"
import {EateryHTML} from "./EateryDetails.js" 

// DOM reference to where all entries will be rendered
const eateryTarget = document.querySelector(".selectedEat")
const detailTarget = document.querySelector(".detailsBox")
const eventHub = document.querySelector("main")

//event listener listening for the chosen eatery 
eventHub.addEventListener("eateryChosen", event => {
    const chosenEatery = event.detail.eateryThatWasChosen
    postedEatery(chosenEatery)
})

//creates the details button upon choosing eatery from dropdown
export const postedEatery = (chosenEatery) => {
    eateryTarget.innerHTML = `
    ${chosenEatery}
    <button class="eatDetailsButton" value="${chosenEatery}">Details</button>`
}

//creating event that happens when you click details button.
eventHub.addEventListener("click", event => {
    if (event.target.className === "eatDetailsButton") {
        const selectedEatery = event.target.value
        const eateryArray = useEateries(); 
        const matchingEatery = eateryArray.filter((taco) => {
                return taco.businessName === selectedEatery
        })
        const matchedEatery = matchingEatery[0]
        render(matchedEatery) 
    }
    }
)

const render = (taco) => {
    detailTarget.innerHTML = ""
    detailTarget.innerHTML += 
    EateryHTML(taco)
}
