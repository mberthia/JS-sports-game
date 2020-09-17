console.log("hi");
let shootButton1 = document.querySelector("#teamone-shoot-button");
let team1Goals = document.querySelector("#teamonenumgoals");
let shootButton2 = document.querySelector("#teamtwo-shoot-button");
let team2Goals = document.querySelector("#teamtwonumgoals");
let resetButton = document.querySelector("#reset-button");
let resetNum = document.querySelector("#numresets");

shootButton1.addEventListener("click", function () {
  console.log("team 1 button clicked");
  let team1Shots = Number(teamonenumshots.innerHTML) + 1;
  teamonenumshots.innerHTML = team1Shots;
  var g = Math.random();
  if (g < 0.5) {
    let team1Goals = Number(teamonenumgoals.innerHTML) + 1;
    teamonenumgoals.innerHTML = team1Goals;
  }
});

shootButton2.addEventListener("click", function () {
  console.log("team 2 button clicked");
  let team2Shots = Number(teamtwonumshots.innerHTML) + 1;
  teamtwonumshots.innerHTML = team2Shots;
  var g = Math.random();
  if (g < 0.5) {
    let team2Goals = Number(teamtwonumgoals.innerHTML) + 1;
    teamtwonumgoals.innerHTML = team2Goals;
  }
});

resetButton.addEventListener("click", function () {
  console.log("reset button clicked");
  let resetClicks = Number(numresets.innerHTML) + 1;
  numresets.innerHTML = resetClicks;
  let team1Goals = Number(teamonenumgoals.innerHTML * 0);
  teamonenumgoals.innerHTML = team1Goals;
  let team2Goals = Number(teamtwonumgoals.innerHTML * 0);
  teamtwonumgoals.innerHTML = team2Goals;
  let team1Shots = Number(teamonenumshots.innerHTML * 0);
  teamonenumshots.innerHTML = team1Shots;
  let team2Shots = Number(teamtwonumshots.innerHTML * 0);
  teamtwonumshots.innerHTML = team2Shots;
});
