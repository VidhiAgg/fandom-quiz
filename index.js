
var readLineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

console.log("------------------------------");
console.log(chalk.bgRed.white.underline.bold("Game of Thrones:  How well do you know Jon Snow?"));
console.log('\n');
var userName = readLineSync.question("What is your name? ");
console.log("Hi " + userName + "! " + "Welcome to the quiz!!");
// Question library

var quesLibrary = [
  {
    ques: "Who was Jon Snow's actual father?",
    ans: "Rhaegar Targaryen"
  },
  {
    ques: "What number Lord Commander of the Night's Watch was Jon Snow?",
    ans: "998th"
  },
  {
    ques: "What location saw the birth of Jon Snow?",
    ans: "Tower of Joy"
  },
  {
    ques: "What battle saw Jon Snow defeated Ramsey Bolton with the help of his Sister's forces? ",
    ans: "Battle of the Bastards"
  },
  {
    ques: "Where does Jon kill his first White Walker? ",
    ans: "Hardhome"
  },
  {
    ques: "Who do some people believe has been reincarnated as Jon Snow?",
    ans: "Azor Ahai"
  },
  {
    ques: "What sword did Jeor Mormont give to Jon Snow?",
    ans: "Longclaw"
  },
  {
    ques: "Who made Jon Snow kill him in order to help infiltrate Mance Rayder's army?",
    ans: "Qhorin Halfhand"
  },
  {
    ques: "What dragon did Jon Snow ride?",
    ans: "Rhaegal"
  }
];
function play(question, answer, seq) {
  console.log(chalk.hex('#f7f006')("Question " + seq + "."))
  var userAnswer = readLineSync.question(chalk.hex('#f7f006')(question) + '\n');
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green.bold("correct!"));
    score++;
  } else {
    console.log(chalk.red.bold("wrong!"));
  }

  console.log("Current Score: ", score);
  console.log("-------------")

}

function playGame() {
  for (let i = 0; i < quesLibrary.length; i++) {
    var currentQuestion = quesLibrary[i];
    play(currentQuestion.ques, currentQuestion.ans, i + 1);
  }
}

function finalScore() {
  console.log('\n'); console.log(chalk.hex('#f7060b').bold.italic("Your final score : ", score));
  console.log('------------------------------');
}

playGame();
finalScore();