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
        console.log(customEvent)
        eventHub.dispatchEvent(customEvent)

    }
}) 



export const EaterySelect = () => {
    getEateries()
    .then(() => {
    const eatery = useEateries(); 
    console.log(eatery) 
    render(eatery)
})
}


const render = (eateryCollection) => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="eaterySelect">
                <option value="0">select an eatery!</option>
                ${
                    eateryCollection.map(eateryObj => {
                        const eatery = eateryObj.businessName
                        return `<option value="${eateryObj.businessName}">${eatery}</option>`
                    })
                }
            </select>
        `    
}
