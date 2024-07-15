/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// ! nombramos variables

let pronoun = [];
let adj = [];
let noun = [];

// ! inicio funcion generateDomain

function generateDomain() {
  let domain = [];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let domainName =
          `${pronoun[p].toLowerCase()}${adj[a].toLowerCase()}${noun[
            n
          ].toLowerCase()}` + ".com";
        domain.push(domainName);
        console.log(domainName);
      }
    }
  }
  console.log("Domain List:", domain);
}

// ! final funcion generateDomain

window.onload = generateDomain;

// ! click en los botones para que: muestren resultado, añadan o eliminen

document.getElementById("result").addEventListener("click", generateDomain);

document.getElementById("addValue").addEventListener("click", () => {
  pronoun.push(document.getElementById("pronounInput").value);
  adj.push(document.getElementById("adjInput").value);
  noun.push(document.getElementById("nounInput").value);
});

document.getElementById("deleteValue").addEventListener("click", () => {
  pronoun.pop();
  adj.pop();
  noun.pop();
});

// ! alertas

const alertPlaceholder = document.getElementById("alertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>"
  ].join("");

  alertPlaceholder.append(wrapper);
};

const addAlertTrigger = document.getElementById("addValue");
const deleteAlertTrigger = document.getElementById("deleteValue");
if (addAlertTrigger) {
  addAlertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
} else if (deleteAlertTrigger) {
  deleteAlertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "danger");
  });
}

// ! imprimir la frase del titulo

console.log("Choose your favourite grumpy domain");

// !!! desarrollo antiguo sin el formulario del usuario
// // ! inicio funcion generateDomain

// function generateDomain() {
//   let pronoun = ["the", "our", "your", "their", "my"];
//   let adj = ["awful", "bored", "old", "bad", "filthy"];
//   let noun = ["skunk", "troll", "cheater", "snail", "elbow"];

//   let domain = [];

//   for (let p = 0; p < pronoun.length; p++) {
//     for (let a = 0; a < adj.length; a++) {
//       for (let n = 0; n < noun.length; n++) {
//         domain.push(`${pronoun[p]}${adj[a]}${noun[n]}` + ".com");
//         console.log(`${pronoun[p]}${adj[a]}${noun[n]}` + ".com");
//       }
//     }
//   }

//   let domainList = "";
//   for (let i = 0; i < domain.length; i++) {
//     domainList += "<p>" + domain[i] + "</p>";
//   }

//   document.getElementById("domain").innerHTML = domainList;
// }

// // ! final funcion generateDomain

// window.onload = generateDomain;

// // ! click en boton y que abra la funcion

// const reload = document.getElementById("reload");

// reload.addEventListener("click", generateDomain);

// // ! imprimir la frase del titulo y el resultado de la función en la consola

// console.log("Choose your favourite grumpy domain");
// console.log(generateDomain);
