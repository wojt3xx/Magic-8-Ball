const resultBtn = document.querySelector(".get-result");
const showQuestion = document.querySelector(".show-question");
const showResult = document.querySelector(".result-text");

resultBtn.addEventListener("click", () => {
  const question = document.getElementById("question").value;

  var randomNumber = Math.floor(Math.random() * 8);

  var eightBall = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
    default:
      console.log("No output");
      break;
  }

  showQuestion.innerHTML = question;
  showResult.innerHTML = eightBall;
});
