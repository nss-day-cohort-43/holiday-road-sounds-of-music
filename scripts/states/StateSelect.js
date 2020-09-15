import { getParks, useParks } from '../parks/ParkProvider.js'
import {useStates} from './StateProvider.js'
import {ParkSelect} from '../parks/ParksSelect.js'

const eventHub = document.querySelector("main")
const selectTarget = document.querySelector(".filters__state")

eventHub.addEventListener("change", event => {
    if (event.target.id === "stateSelect") {
        const stateKey = event.target.value
        getParks(stateKey)
        .then(() => {
            ParkSelect(stateKey)
        })
    }
})


export const selectRuner = () => {
    const states = useStates()
    render(states);
}


const render = (states) => {
    selectTarget.innerHTML = `
            <select class="dropdown state-dropdown" id="stateSelect">
                <option value="0">Select a State...</option>
                ${
                    states.map(state => {
                        return `<option value="${state.abbreviation}">${state.name}</option>`
                    })
                }
            </select>
        `
}

