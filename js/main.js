var game = {
  // Le nombre max
  max: 500,
  // Le nombre d'essais
  attemps:0,
  // Le nombre cherché
  searchedNumber: null,
}

// Le nombre cherché
game.searchedNumber = Math.round(Math.random() * game.max);
console.log(game.searchedNumber);

// Le nombre saisi
var enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));

function play() {
  // Tant que le nombre saisi n'est pas bon on redemande un nombre
  while (enteredNumber !== game.searchedNumber) {
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < game.searchedNumber) {
      enteredNumber = parseInt(prompt("C'est plus"));
    } else {
      enteredNumber = parseInt(prompt("C'est moins"));
    }
    // on incrémente le nombre d'essais
    game.attemps += 1;
  }
  
  // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
  // on affiche un message de victoire
  alert(
    "Bravo ! C'était bien " + game.searchedNumber + " - Nombre d'essais : " + game.attemps
  );
}

play();
