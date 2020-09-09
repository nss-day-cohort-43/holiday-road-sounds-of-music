import { useEateries, getEateries } from "./EateryProvider.js"

const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".filters__eateries")

export const EaterySelect = () => {
    getEateries()
    .then(() => {
    const eatery = useEateries(); 
    console.log(eatery)
    

    eventHub.addEventListener("change", event => {
        if (event.target.id === "eaterySelect") {
        
            const customEvent = new CustomEvent("eateryChosen", {
                detail: {
                    eateryThatWasChosen: event.target.value
                }
            })
            console.log(customEvent)
            eventHub.dispatchEvent(customEvent)
    
        }
    }) }
    