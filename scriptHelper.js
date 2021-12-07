// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

    if(testInput === null || testInput.trim === ""){
        return "Empty"
    } else if( isNaN(Number(testInput)) ){
        return "Not a Number"
    }else{
        return "Is a Number"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")

    if (validateInput(pilotName ) === "Empty" || validateInput(copilot)=== "Empty"|| validateInput(fuelLevel)=== "Empty"|| validateInput(cargoLevel)==="Empty") {
        alert("all field must be filled");
            
       } else if (validateInput(pilotName)=== "Is a Number" || validateInput(copilot) === "Is a Number"){
           alert("please input valid information")
       }else if ( validateInput(fuelLevel)=== "Not a Number" || validateInput(cargoLevel)=== "Not a Number"){
           alert('please enter a number')
       }
        else{
        pilotStatus.innerHTML = `Pilot ${pilot} ready`
        copilotStatus.innerHTML = `Copilot ${copilot} ready`
        }

        if (fuelLevel<10000){
            list.style.visibility = "visible"
            fuelStatus.innerHTML = "there is not enough fuel for the journey"
            launchStatus.style.color ='red'
            launchStatus.innerHTML ="Shuttle not ready for launch"

        }else if(cargoLevel > 10000){
            list.style.visibility ="visible"
            cargoStatus.innerHTML = "there is too much mass for the shuttle to take off"
            launchStatus.style.color ='red'
            launchStatus.innerHTML ="Shuttle not ready for launch"

        }else if(fuelLevel >= 10000 && cargoLevel<= 10000){
            list.style.visibility = "visible"
            launchStatus.style.color ='green'
            launchStatus.innerHTML ="Shuttle ready for launch"
            fuelStatus.innerHTML ="Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"

        }
        
        
    
  };

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
