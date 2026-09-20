// Oppdaterer året i footnoten
const aar = new Date().getFullYear();
const fn = document.getElementById("footnote");
fn.textContent = "© " + aar + " Dan-Remi Olsen";

