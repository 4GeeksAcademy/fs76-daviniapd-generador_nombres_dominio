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

// ! alertas

function showAlert(message, type) {
  const alertContainer = document.getElementById("alertContainer");
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.role = "alert";
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  alertContainer.appendChild(alertDiv);

  // Eliminar la alerta después de 3 segundos
  setTimeout(() => {
    alertDiv.classList.remove("show");
    alertDiv.classList.add("hide");
    setTimeout(() => alertDiv.remove(), 500);
  }, 3000);
}

// ! click en los botones para que: muestren resultado, añadan o eliminen

function handleInput(action) {
  const pronounInput = document
    .getElementById("pronounInput")
    .value.replace(/\ /g, "");
  const adjInput = document.getElementById("adjInput").value.replace(/\ /g, "");
  const nounInput = document
    .getElementById("nounInput")
    .value.replace(/\ /g, "");

  if (action === "add") {
    if (!pronounInput && !adjInput && !nounInput) {
      showAlert("Please enter a value in at least one field.", "warning");
      return;
    }
  }

  if (pronounInput) {
    if (action === "add") {
      showAlert(`Pronoun added: ${pronounInput}`, "success");
      pronoun.push(pronounInput);
    } else if (action === "delete") {
      const index = pronoun.indexOf(pronounInput);
      if (index > -1) {
        pronoun.splice(index, 1);
        showAlert(`Pronoun deleted: ${pronounInput}`, "danger");
      } else {
        showAlert(`Pronoun not found: ${pronounInput}`, "warning");
      }
    }
  }

  if (adjInput) {
    if (action === "add") {
      showAlert(`Adjective added: ${adjInput}`, "success");
      adj.push(adjInput);
    } else if (action === "delete") {
      const index = adj.indexOf(adjInput);
      if (index > -1) {
        adj.splice(index, 1);
        showAlert(`Adjective deleted: ${adjInput}`, "danger");
      } else {
        showAlert(`Adjective not found: ${adjInput}`, "warning");
      }
    }
  }

  if (nounInput) {
    if (action === "add") {
      showAlert(`Noun added: ${nounInput}`, "success");
      noun.push(nounInput);
    } else if (action === "delete") {
      const index = noun.indexOf(nounInput);
      if (index > -1) {
        noun.splice(index, 1);
        showAlert(`Noun deleted: ${nounInput}`, "danger");
      } else {
        showAlert(`Noun not found: ${nounInput}`, "warning");
      }
    }
  }

  // Vaciar las casillas
  document.getElementById("pronounInput").value = "";
  document.getElementById("adjInput").value = "";
  document.getElementById("nounInput").value = "";
}

document
  .getElementById("addValue")
  .addEventListener("click", () => handleInput("add"));
document
  .getElementById("deleteValue")
  .addEventListener("click", () => handleInput("delete"));

document.getElementById("result").addEventListener("click", generateDomain);

// ! alertas

// const alertPlaceholder = document.getElementById("alertPlaceholder");
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement("div");
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     "</div>"
//   ].join("");

//   alertPlaceholder.append(wrapper);
// };

// const addAlertTrigger = document.getElementById("addValue");
// const deleteAlertTrigger = document.getElementById("deleteValue");
// if (addAlertTrigger) {
//   addAlertTrigger.addEventListener("click", () => {
//     appendAlert("Nice, you triggered this alert message!", "success");
//   });
// } else if (deleteAlertTrigger) {
//   deleteAlertTrigger.addEventListener("click", () => {
//     appendAlert("Nice, you triggered this alert message!", "danger");
//   });
// }

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
