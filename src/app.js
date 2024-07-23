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
function showAlertWithInstructions(message, type) {
  const alertContainer = document.getElementById("alertContainer");
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.role = "alert";
  alertDiv.innerHTML = `${message} <button id="closeInstructions" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  alertContainer.appendChild(alertDiv);

  // agregar evento para cerrar la alerta al hacer clic en el botón de cerrar
  document.getElementById("closeInstructions").addEventListener("click", () => {
    alertDiv.remove();
  });
}

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

  if (action === "delete" && !pronounInput && !adjInput && !nounInput) {
    showAlert("Please enter a value in at least one field.", "warning");
    return;
  }

  if (pronounInput) {
    const pronounList = document.getElementById("pronounList");
    const pronounAdded = document.createElement("li");
    if (action === "add") {
      showAlert(`Pronoun added: ${pronounInput}`, "success");
      pronoun.push(pronounInput);
      pronounAdded.innerHTML = `<span></span> ${pronounInput}`;
      pronounList.appendChild(pronounAdded);
    } else if (action === "delete") {
      const index = pronoun.indexOf(pronounInput);
      if (index > -1) {
        pronoun.splice(index, 1);
        showAlert(`Pronoun deleted: ${pronounInput}`, "danger");
        pronounList.removeChild(pronounList.childNodes[index]);
      } else {
        showAlert(`Pronoun not found: ${pronounInput}`, "warning");
      }
    }
  }

  if (adjInput) {
    const adjList = document.getElementById("adjList");
    const adjAdded = document.createElement("li");
    if (action === "add") {
      showAlert(`Adjective added: ${adjInput}`, "success");
      adj.push(adjInput);
      adjAdded.innerHTML = `<span></span> ${adjInput}`;
      adjList.appendChild(adjAdded);
    } else if (action === "delete") {
      const index = adj.indexOf(adjInput);
      if (index > -1) {
        adj.splice(index, 1);
        showAlert(`Adjective deleted: ${adjInput}`, "danger");
        adjList.removeChild(adjList.childNodes[index]);
      } else {
        showAlert(`Adjective not found: ${adjInput}`, "warning");
      }
    }
  }

  if (nounInput) {
    const nounList = document.getElementById("nounList");
    const nounAdded = document.createElement("li");
    if (action === "add") {
      showAlert(`Noun added: ${nounInput}`, "success");
      noun.push(nounInput);
      nounAdded.innerHTML = `<span></span> ${nounInput}`;
      nounList.appendChild(nounAdded);
    } else if (action === "delete") {
      const index = noun.indexOf(nounInput);
      if (index > -1) {
        noun.splice(index, 1);
        showAlert(`Noun deleted: ${nounInput}`, "danger");
        nounList.removeChild(nounList.childNodes[index]);
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
  // vaciar las variables
  domain = [];
  pronoun = [];
  adj = [];
  noun = [];
  //eliminar los elementos de las listas en el DOM
  document.getElementById("pronounList").innerHTML = "";
  document.getElementById("adjList").innerHTML = "";
  document.getElementById("nounList").innerHTML = "";
  console.clear(); // limpiar la consola
  document.getElementById("domainForm").reset(); // resetear el formulario

  // mostrar alerta de reseteo
  showAlert("Form reset successfully.", "info");
});

document.getElementById("reload").addEventListener("click", () => {
  showAlertWithInstructions(
    "You must add one pronoun, one adjective and one noun to generate a domain name. The structure of a domain name is <em>pronounadjnoun.com</em>",
    "warning"
  );
}); // para que la alerta de las instrucciones salte cada vez que el usuario le de al botón
