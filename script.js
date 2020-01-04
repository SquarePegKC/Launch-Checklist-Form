// Write your JavaScript code here!
window.addEventListener("load", function() {

   fetch('https://handlers.education.launchcode.org/static/planets.json').then (function(response){
      response.json().then (function(json){
   
   const div =   document.getElementById("missionTarget");
    
   let data = json[0];

   div .innerHTML +=`

   <h2>Mission Destination</h2>
<ol>
   <li>Name: ${data.name}</li>
   <li>Diameter: ${data.diameter}</li>
   <li>Star: ${data.star}</li>
   <li>Distance: ${data.distance}</li>
   <li>Number of Moons: ${data.moons}</li>
</ol>
<img src="${data.image}">
`;
})
});

   let list = document.getElementById("faultyItems");
     list.style.visibility = "hidden"

   let form = document.querySelector("form");
   let launchStatus = document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   form.addEventListener("submit", function (event) {
     event.preventDefault();
   
   let pilot = pilotNameInput.value
   let pilotNameInput = document.querySelector("input[name=pilotName]");

   let coPilot = coPilotNameInput.value
   let coPilotNameInput = document.querySelector("input[name=coPilotName]");

   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = Number(fuelLevelInput.value);

   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   let cargoMass = Number(cargoMassInput.value);

   if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
      alert ("*All fields are required.");
   }

   
  else if(!isNaN(pilotNameInput.value)){
      alert("Pilot name needs to be valid.");

   } else {
      list.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is ready for launch`;
 

   if (fuelLevel < 10000 && cargoMass <=10000) {

      launchStatus.innerHTML = "Shuttle not ready for launch."
      fuelLevel.innerHTML = "Fuel level too low for launch."
      launchStatus.style.color = "#FE2EF7";
   }
   else {
      launchStatus.innerHTML = "Shuttle ready for launch."
      launchStatus.style.color = "#0040FF"

   }

} 
})

});     





     
