// DOM reference to where all entries will be rendered

export const EateryHTML = (eateryObj) => {
    return ` 
        <section class="eatDeets">
            <h2>${eateryObj.businessName}</h2> 
            <p>${eateryObj.city}, ${eateryObj.state}</p>
            <p>${eateryObj.description}</p>
            <p>Pet Friendly: ${eateryObj.ameneties.petFriendly}</p>
            <p>Restrooms: ${eateryObj.ameneties.restrooms}</p>
            <p>Diaper Facility: ${eateryObj.ameneties.diaperFacility}</p>
            <p>Playground: ${eateryObj.ameneties.playground}</p>
        </section>
    `
}
