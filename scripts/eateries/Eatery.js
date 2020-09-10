// DOM reference to where all entries will be rendered
const eateryTarget = document.querySelector(".selectedEat")
const eventHub = document.querySelector("main")

eventHub.addEventListener("eateryChosen", event => {
    const chosenEatery = event.detail.eateryThatWasChosen
    postedEatery(chosenEatery)
})


export const postedEatery = (chosenEatery) => {
    eateryTarget.innerHTML = `
    ${chosenEatery}
    <button>Details</button>`
}