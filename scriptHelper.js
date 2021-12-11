// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionInfo = document.getElementById("missionTarget")


   missionInfo.innerHTML +=
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}>`;
}

function validateInput(testInput) {

    if(testInput === null || testInput.trim() === ""){
        return "Empty";
    } else if( isNaN(Number(testInput)) ){
        return "Not a Number";
    }else{
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty"|| validateInput(fuelLevel)=== "Empty"|| validateInput(cargoLevel)==="Empty") {
        alert("all fields must be filled");
            
       } else if (validateInput(pilot)=== "Is a Number" || validateInput(copilot) === "Is a Number"){
           alert("Invalid!!!Letters are only!")
       }else if ( validateInput(fuelLevel)=== "Not a Number" || validateInput(cargoLevel)=== "Not a Number"){
           alert('Invalid!!! Numbers only!')
       }
        else{
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch `
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()

        
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNum =Math.floor(Math.random()*6)
    
    return planets[randomNum]
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
