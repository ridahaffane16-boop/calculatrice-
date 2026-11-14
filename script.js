const ecran = document.getElementById("ecran");
const boutons = document.querySelectorAll(".btn");

let expression = "";

boutons.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const valeur = bouton.dataset.valeur;
    const action = bouton.dataset.action;

    if (valeur) {
      expression += valeur;
      ecran.textContent = expression;
    }

    if (action === "clear") {
      expression = "";
      ecran.textContent = "0";
    }

    if (action === "egal") {
      try {
        expression = String(eval(expression));
        ecran.textContent = expression;
      } catch {
        ecran.textContent = "Erreur";
        expression = "";
      }
    }
  });
});