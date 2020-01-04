// Write your JavaScript code here!
window.addEventListener("load", function() {

   fetch('https://handlers.education.launchcode.org/static/planets.json').then (function(response){
      response.json().then( function(json){
   
   const div =   document.getElementById("missionTarget");
   let data = json[0];
   div.innerHTML = `
   <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${data.name}</li>
         <li>Diameter: ${data.diameter}</li>
         <li>Star: ${data.star}</li>
         <li>Distance from Earth: ${data.distance}</li>
         <li>Number of Moons: ${data.moons}</li>
      </ol>
      <img src="${data.image}">
      `;
   })
});

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden"
   let form = document.querySelector('form');
   
   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");

   let launchStatus = document.getElementById("launchStatus");

   form.addEventListener("submit", function (event) {
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotNameInput.value;
      
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let copilot = coPilotNameInput.value;

      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelLevel = Number(fuelLevelInput.value);

      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoMass = Number(cargoMassInput.value);

      
      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("*All fields required!");
      } else if (!isNaN(pilotNameInput.value)) {
         alert("Pilot name needs to be valid");

      } else {
      
         list.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

         if (fuelLevel < 10000 && cargoMass <= 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch."
            fuel.innerHTML = "Fuel level too low for launch."
            fuel.style.color = "#AF0918";
            launchStatus.style.color = "#AF0918";
         } else if (fuelLevel < 10000 && cargoMass > 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch."
            fuel.innerHTML = "Fuel level too low for launch."
            fuel.style.color = "#AF0918";
            cargo.innerHTML = "Cargo mass is too heavy for launch."
            cargo.style.color = "#AF0918";
            launchStatus.style.color = "#AF0918";
         } else {
            launchStatus.innerHTML = "Shuttle is ready for launch."
            fuel.innerHTML = "Fuel level adequate for launch."
            fuel.style.color = "#20B33B";
            cargo.innerHTML = "Cargo mass is adequate for launch."
            cargo.style.color = "#20B33B";
            launchStatus.style.color = "#20B33B";
         }
      } 
   })

});     

  







     
