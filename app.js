let player = {
  name: "Govindam",
  chips: "₹ 504",
};

let sum = 0;
let msg2 = " ";
let hasBlackJack = false;
let inGame = false;
let cards = [];
// console.log(cards);

let sumEl = document.getElementById("sum-El");
msg1 = document.getElementById("msgg");
let cardEl = document.getElementById("card-El");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : " + player.chips;

function start() {
  // hasBlackjack = "true";
  inGame = true;
  let a = randomCard();
  let b = randomCard();
  cards = [a + b];
  sum = a + b;

  rendergame();
}
// Use getRandomCard() to set the values of firstcard and second card.
function randomCard() {
  let r = Math.floor(Math.random() * 13) + 1;
  // return r;
  if (r > 10) {
    return 10;
  } else if (r === 1) {
    return 11;
  } else {
    return r;
  }
}
// ........*********
// randomCard();
function rendergame() {
  cardEl.textContent = "card :";
  ///use of for loop to add all the cards in the Game
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  //for loop for rendering out all the cards ,instead of just two

  sumEl.textContent = "sum:" + sum;
  if (sum <= 21) {
    msg2 = "'you're in the game";
    // inGame = "true";
  } else if (sum === 21) {
    msg2 = "you've got a BlackJack!!";

    hasBlackJack = true;
  } else {
    msg2 = "'you're out of game";
    inGame = false;
  }
  msg1.textContent = msg2;
}

function newcard() {
  if (inGame === true && hasBlackJack === false) {
    let card = randomCard();
    sum = sum + card;
    cards.push(card);
    rendergame();
  }
}
newcard();
// console.log("new card ");

//  use of array "push" method to insert new array element in the cards' variable.
// cards.push = card;
