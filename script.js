// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let list = document.getElementById("faultyItems")
        let pilot = document.querySelector("[name=pilotName]").value
        let copilot = document.querySelector("[name=copilotName]").value
        let fuelLevel = document.querySelector("[name=fuelLevel]").value
        let cargoLevel = document.querySelector("[name=cargoMass]").value

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });
//    /let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});