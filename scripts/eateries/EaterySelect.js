import { useEateries, getEateries } from "./EateryProvider.js";

const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".filters__eateries")


eventHub.addEventListener("change", event => {
    if (event.target.id === "eaterySelect") {
        const customEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
}) 


export const EaterySelect = () => {
    getEateries()
    .then(() => {
    const eatery = useEateries(); 
    render(eatery)
})
}


const render = (eateryCollection) => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="eaterySelect">
                <option value="0">Select an Eatery...</option>
                ${
                    eateryCollection.map(eateryObj => {
                        const eatery = eateryObj.businessName
                        return `<option value="${eateryObj.businessName}">${eatery}</option>`
                    })
                }
            </select>
        `    
}
