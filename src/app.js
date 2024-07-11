/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateDomain() {
  let pronoun = ["the", "our", "your", "their", "my"];
  let adj = ["awful", "bored", "old", "bad", "filthy"];
  let noun = ["skunk", "troll", "cheater", "snail", "elbow"];

  let domain = [];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        domain.push(`${pronoun[p]}${adj[a]}${noun[n]}` + ".com");
        console.log(`${pronoun[p]}${adj[a]}${noun[n]}` + ".com");
      }
    }
  }

  let domainList = "";
  for (let i = 0; i < domain.length; i++) {
    domainList += "<p>" + domain[i] + "</p>";
  }

  document.getElementById("domain").innerHTML = domainList;
}

// window.onload = generateDomain;

const reload = document.getElementById("reload");

reload.addEventListener("click", generateDomain);

console.log("Choose your favourite grumpy domain");
