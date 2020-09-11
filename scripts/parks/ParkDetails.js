export const parkDetailHTML = (park) => {
    return `
    <section class="parkDetails">
        <h2>${park.fullName}</h2>
        <p></p>
        <div>${park.description}</div>
        <p></p>
        <div> Designation: ${park.designation}</div>
        <p></p>
        <div>${park.directionsInfo} </div>
    </section>
`
}
