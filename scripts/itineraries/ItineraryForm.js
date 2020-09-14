//pull data -- info we want to save -- from DOM & create an object with it 
// listening for event changes from dropdown
//listening for save button to be clicked 

export const savedObject = () => {
    const parkChecker = document.querySelector(".park-details").value
    const eatChecker = document.querySelector(".eatDetailsButton").value
    const attractChecker = document.querySelector(".attractionDetailsButton").value
    const nameChecker = document.querySelector("#tripName").value
    const itineraryObj = {
        selectedPark: parkChecker, 
        selectedEat: eatChecker,
        selectedAttraction: attractChecker,
        nameType: nameChecker
    }
    
    return itineraryObj
}