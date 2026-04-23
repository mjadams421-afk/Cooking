 //Variables for the ingredients sections
const fishIn = document.getElementById("Fish");
const chickenIn = document.getElementById("Chicken");
const bakingIn = document.getElementById("Baking");
const resetB = document.getElementById("reset");
//Fish event listener and function
function displayInA() {
  fishIn.innerHTML = '"Cooking Fish": Fish Fillet, bread crumbs, herbs, Lemon, Garlic, Olive Oil, honey mustard, Salt & Pepper';
  fishIn.style.backgroundColor = 'rgba(250, 250, 220, 1)';
  fishIn.style.color = 'black';
  fishIn.style.border= '4px solid black';
 }
//Chicken event listener and function
function displayInB() {
  chickenIn.innerHTML = '"Cooking Chicken": Chicken Breast, mushrooms, chicken broth, milk, cheese, spaghetti, Salt & Pepper';
  chickenIn.style.backgroundColor = 'rgba(250, 250, 220, 1)';
  chickenIn.style.color = 'black';
  chickenIn.style.border= '4px solid black';
}
//Baking event listener and function
function displayInC() {
  bakingIn.innerHTML = '"Baking": Flour, Sugar, powdered sugar, Eggs, Butter, Baking Powder, sour cream, corn oil, nutmeg, Salt';
  bakingIn.style.backgroundColor = 'rgba(250, 250, 220, 1)';
  bakingIn.style.color = 'black';
  bakingIn.style.border= '4px solid black';
}

function reset() {
  fishIn.removeEventListener('mousedown', displayInA);
  chickenIn.removeEventListener('mousedown', displayInB);
  bakingIn.removeEventListener('mousedown', displayInC);
}

//Event Handlers for functions
 fishIn.addEventListener('mousedown', displayInA);
 chickenIn.addEventListener('mousedown', displayInB);
 bakingIn.addEventListener('mousedown', displayInC);
 resetB.onclick = reset;
 