// Seleccionar el formulari.
const formulari = document.querySelector("#formulari-contacte");

// Establir el motiu predeterminat.
document.querySelector('#motiu option[value="preu"]').defaultSelected = true;

// Validació del formulari.
formulari.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = document.querySelector("#nom");

    if (nom.value.trim().length < 3) {
        const error_nom = document.createElement("span");
        error_nom.textContent = "El nom ha de tenir almenys 3 caràcters!";
        nom.after(error_nom);
        return;
    }

    formulari.reset();
});