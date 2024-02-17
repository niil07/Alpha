function play() {
  //home screen hide
  const homeScreen = document.getElementById("home");
  const homeHide = homeScreen.classList.add("hidden");

  //playground screen show
  const playScreen = document.getElementById("play-ground");
  const playShow = playScreen.classList.remove("hidden");

  continueGame();
}

function getRandomAlphabet() {
  //get and create alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //get random alphabet
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}

function continueGame() {
  const alphabet = getRandomAlphabet();
  console.log(alphabet);

  // show generated element
  const generatedElement = document.getElementById("current-element");
  generatedElement.innerText = alphabet;
}
