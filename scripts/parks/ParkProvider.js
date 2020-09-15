// fetches from the API 
//TRAVIS 
import {keys} from '../Settings.js'


let parks = []

export const useParks = () => {
    return parks.slice()
}


export const getParks = (stateKey) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateKey}&api_key=${keys.npsKey}`)
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks.data
            })
}
