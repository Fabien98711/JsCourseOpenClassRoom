let choiceBtnList = document.querySelectorAll("#choiceBtn input");
let propositionArea = document.getElementById("propositionArea");
const validateBtn = document.getElementById("validateBtn");
let userInput = document.getElementById("userInput");
let scoreArea = document.getElementById("score");
let mName = "";
let mail = "";
let regexName = new RegExp("^[a-z]*[a-z]$");
let regexMail = new RegExp("^[a-z.-_0-9]+@[a-z.-_0-9]+\\.[a-z.-_0-9]+$");
let sendScoreBtn = document.getElementById("sendScoreBtn");
console.log(sendScoreBtn);
let form = document.querySelector("form");

function displayProposition(list) {
  propositionArea.innerHTML = `${list}`;
}

function displayScore(score, nbMots) {
  scoreArea.innerHTML = `
${score}/${nbMots}
`;
}

function startGame() {
  let score = 0;
  let i = 0;
  let propositionList = wordList; //par default la liste est celle des mots

  displayProposition(propositionList[i]);

  validateBtn.addEventListener("click", () => {
    console.log(userInput.value);
    console.log(propositionArea.innerText[i]);
    if (userInput.value === propositionList[i]) {
      score++;
    }

    userInput.value = "";

    i++;

    displayScore(score, i);

    if (propositionList[i] === undefined) {
      displayProposition("Le jeu est terminé");
      validateBtn.disabled.true;
    } else {
      displayProposition(propositionList[i]);
    }
  });

  for (let index = 0; index < choiceBtnList.length; index++) {
    choiceBtnList[index].addEventListener("change", (event) => {
      console.log(event.target.value);
      if (event.target.value === "words") {
        propositionList = wordList;
      } else {
        propositionList = sentenceList;
      }
      displayProposition(propositionList[i]);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(score);
    mName = document.getElementById("userName").value;
    console.log(mName);
    mail = document.getElementById("mail").value;
    console.log(mail);

    if (verifyName(mName) && verifyMail(mail)) {
      displayEmail(mName, mail, score);
    } else {
      console.log("message erreur");
    }
  });
}
//fin fonction startGame()

function displayEmail(nName, email, score) {
  console.log(score);
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nName} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
  location.href = mailto;
}

function verifyName(name) {
  if (mName.length > 2) {
    return true;
  }
  return false;
}
function verifyMail(mail) {
  if (regexMail.test(mail)) {
    return true;
  }
  return false;
}

//
