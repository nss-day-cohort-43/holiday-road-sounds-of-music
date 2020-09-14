const eventHub = document.querySelector("main")
const photoTarget = document.querySelector(".photoBox")

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


eventHub.addEventListener('parkChosen', event => {  
    const parkURL = event.detail.parkURL
    photoTarget.innerHTML = `
    <img class="parkPhoto" src="${parkURL}" alt="Image of selected park">
    `
   
})