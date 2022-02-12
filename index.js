function rpsGame(yourChoice) {
  const humanChoice = yourChoice.id;
  const botChoice = randomChoice(randomNum());
  console.log(botChoice);

  const image1 = image(yourChoice.src);

  //document.body.innerHTML = "<img src= '" + yourChoice.src + "'>";

  const text = checkWinner(humanChoice, botChoice);
  let image2 = "";
  if (botChoice == "paper") {
    image2 = image("./paper.jpg");
  } else if (botChoice == "rock") {
    image2 = image("./rock.jpg");
  } else {
    image2 = image("./scissor.jpg");
  }
  image2.setAttribute("class", "blue");
  //console.log(result);
  frontEnd({ image1, text, image2 });
}

function randomChoice(random) {
  return ["rock", "paper", "scissor"][random];
}
function randomNum() {
  return Math.floor(Math.random() * 3);
}
function checkWinner(humanChoice, botChoice) {
  var database = {
    rock: { rock: 0.5, paper: 0, scissor: 1 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { rock: 0, paper: 1, scissor: 0.5 },
  };
  if (database[humanChoice][botChoice] == 1) {
    //
    return text("You Won!!!", "userWon");
    // return "You won!";
  } else if (database[humanChoice][botChoice] == 0) {
    return text("Computer Won!", "compWon");
    //return "Computer won!";
  } else {
    //
    return text("Draw Rematch", "draw");
    //return "Draw rematch";
  }
}
function image(src) {
  const divImg = document.createElement("div");
  //divImg.innerHTML = "<img src='" + src + "'>";
  divImg.innerHTML = "<img src = '" + src + "' height = '50px'>";
  //const img = document.createElement("img");
  //img.setAttribute("src", src);
  return divImg;
}
function text(txt, attribute) {
  const h1 = document.createElement("h1");
  h1.innerText = txt;
  h1.setAttribute("class", attribute);
  return h1;
}
function frontEnd({ image1, text, image2 }) {
  const oldDiv = document.getElementById("flex-box");
  oldDiv.setAttribute("class", "hide");
  const container = document.getElementById("cont");
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "flex-box");
  newDiv.appendChild(image1);
  newDiv.appendChild(text);
  newDiv.appendChild(image2);
  const button = document.createElement("button");
  button.setAttribute("class", "btn btn-primary button");
  button.innerText = "play Again";
  button.setAttribute("onclick", "playAgain()");

  container.appendChild(newDiv);
  container.appendChild(button);
}
const playAgain = () => {
  document.location.reload();
};
