/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateDomain() {

  let pronoun = ["the", "our", "your", "their", "my", "her", "his"]
  let adj = ["awful", "bored", "old", "bad", "poor", "filthy", "slow"];
  let noun = ["skunk", "troll", "cheater", "snail", "elbow", "ruin", "banger"];

  let domain = []

  // for (let i=0; i <)

  document.getElementById("domain").innerHTML =
    "<p>" +
    pronoun[rand] +
    adj[rand] +
    noun[rand] +
    ".com"
    "</p>";
}


window.onload = generateDomain


console.log("Choose your favourite grumpy domain");




// /* eslint-disable */
// import "bootstrap";
// import "./style.css";
// import "./index.html";


// function generateExcuse() {
//   let who = [
//     "The turtle",
//     "My dad",
//     "The policeman",
//     "My dog",
//     "My cousin's horse"
//   ];
//   let action = ["hit", "kicked", "smashed", "broke", "stole"];
//   let what = ["my computer", "my telephone", "my bike", "the keys"];
//   let when = [
//     "while I was doing yoga",
//     "when I was taking a shower",
//     "when I was in bed",
//     "before the work",
//     "while I was food shopping"
//   ];

//   let rand_who = Math.floor(Math.random() * who.length);
//   let rand_action = Math.floor(Math.random() * action.length);
//   let rand_what = Math.floor(Math.random() * what.length);
//   let rand_when = Math.floor(Math.random() * when.length);

//   document.getElementById("excuse").innerHTML =
//     "<p>" +
//     who[rand_who] +
//     " " +
//     action[rand_action] +
//     " " +
//     what[rand_what] +
//     " " +
//     when[rand_when] +
//     "</p>";
// }

// window.onload = generateExcuse;

// const reload = document.getElementById("reload");

// reload.addEventListener("click", generateExcuse);

// console.log("OMG! You will not believe me but...");
