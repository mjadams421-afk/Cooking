const fishIn = document.getElementById("Fish");
const chickenIn = document.getElementById("Chicken");
const bakingIn = document.getElementById("Baking");

function displayInA() {
  fishIn.innerHTML = 'Cooking Fish: Fish Fillet, bread crumbs, herbs, Lemon, Garlic, Olive Oil, honey mustard, Salt & Pepper';
  fishIn.style.backgroundColor = 'rgba(250, 250, 220, 1)';
  fishIn.style.color = 'black';
 }

 fishIn.addEventListener('click', displayInA);