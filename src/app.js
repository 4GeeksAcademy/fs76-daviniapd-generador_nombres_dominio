/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// ! imprimir la frase del titulo

console.log("Create and choose your favourite domain");

// ! nombramos variables

let pronoun = [];
let adj = [];
let noun = [];

let domain = [];

// ! inicio funcion generateDomain

function generateDomain() {
  const domainContainer = document.getElementById("domain");
  domainContainer.innerHTML = ""; // limpiar el contenedor antes de agregar nuevos dominios

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let domainName =
          `${pronoun[p].toLowerCase()}${adj[a].toLowerCase()}${noun[
            n
          ].toLowerCase()}` + ".com";
        domain.push(domainName);
        console.log(domainName);

        // crear un nuevo elemento para cada dominio y agregarlo al contenedor
        const domainElement = document.createElement("div");
        domainElement.textContent = domainName;
        domainContainer.appendChild(domainElement);
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
  alertDiv.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  alertContainer.appendChild(alertDiv);

  // eliminar la alerta después de 3 segundos
  setTimeout(() => {
    alertDiv.classList.remove("show");
    alertDiv.classList.add("hide");
    setTimeout(() => alertDiv.remove(), 500);
  }, 3000);
}

// ! click en los botones para que: muestren resultado, reseteen, añadan o eliminen

function addDeleteInput(action) {
  const pronounInput = document
    .getElementById("pronounInput")
    .value.replace(/\ /g, "");
  const adjInput = document.getElementById("adjInput").value.replace(/\ /g, "");
  const nounInput = document
    .getElementById("nounInput")
    .value.replace(/\ /g, "");

  if (action === "add" && !pronounInput && !adjInput && !nounInput) {
    showAlert("Please enter a value in at least one field.", "warning");
    return;
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

  // vaciar las casillas
  document.getElementById("pronounInput").value = "";
  document.getElementById("adjInput").value = "";
  document.getElementById("nounInput").value = "";
}

document
  .getElementById("addValue")
  .addEventListener("click", () => addDeleteInput("add"));

document
  .getElementById("deleteValue")
  .addEventListener("click", () => addDeleteInput("delete"));

document.getElementById("result").addEventListener("click", generateDomain);

document.getElementById("resetButton").addEventListener("click", function() {
  document.getElementById("domain").innerHTML = "";
  domain = []; // vaciar la variable de dominios
  pronoun = [];
  adj = [];
  noun = [];
  console.clear(); // limpiar la consola
  document.getElementById("domainForm").reset(); // resetear el formulario

  // mostrar alerta de reseteo
  showAlert("Form reset successfully.", "info");
});
