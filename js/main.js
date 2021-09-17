var game = {
  // Le nombre aleatoire
  randomNumber: 0,
  // Le nombre d'essais
  attemps: 1,
  // Le nombre minimum
  min: 10,
  // Le nombre maximum
  max: 50,
};

// Le Score
var score = [];

// Le nombre cherché
function searchedNumber(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

function play() {
  game.randomNumber = searchedNumber(game.min, game.max);
  console.log(`Nombre aleatoire: `, game.randomNumber);

  // Le nombre saisi
  var enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));

  // Tant que le nombre saisi n'est pas bon on redemande un nombre
  while (enteredNumber !== game.randomNumber) {
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < game.randomNumber) {
      enteredNumber = parseInt(prompt("C'est plus"));
    } else {
      enteredNumber = parseInt(prompt("C'est moins"));
    }
    // on incrémente le nombre d'essais
    game.attemps += 1;
  }
  // on ajoute un essai au tableau score
  score.push(game.attemps);

  // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
  // on affiche un message de victoire
  alert(
    "Bravo ! C'était bien " + game.randomNumber + " - Nombre d'essais : " + game.attemps
  );

  // on demande au client s'il veut rejouer
  var responseUser = confirm('Une nouvelle partie ?');
  if (responseUser === true) {
    console.log('il est OK pour une nouvelle partie !');
    play();
  } else {
    console.log('il ne veut plus jouer...');
  }
}

play();
// Affichage du score dans la console
console.log('le score: ' + score);
