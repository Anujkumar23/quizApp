
let quiz = [
  {
    question: " Q1:what is the fullform of HTML ?",
    option1: "HyperText Markup Language",
    option2: "HyperTest Markup Language",
    option3: "HyTest Markup Language",
    option4: "Hypertext Make Language",
  },
  {
    question: " Q2:what is the fullform of HTTP ?",
    option1: "HyperText Transfer Product",
    option2: "HyperText Test Protocol",
    option3: "Hey Transfer Protocol",
    option4: "HyperText Transfer Protocol ",
  },

  {
    question: " Q3:what is the fullform of JS ?",
    option1: "Javascript",
    option2: "JavaSuper",
    option3: "JustScript",
    option4: "Javaserver",
  },

  {
    question: " Q4:what is the fullform of CSS ?",
    option1: "Cascading Style Sheets",
    option2: "Cascading Style Sheep",
    option3: "Cartoon Style Sheets",
    option4: "Cascading Super Sheets",
  },
];

let correctAnswer = [
  { ans: "option1" },
  { ans: "option4" },
  { ans: "option1" },
  { ans: "option1" },
];

let questionCount = 0;
let score = 0;
let answerCount=0;



let loadQuestion = () => {
  document.getElementById("question").innerHTML = quiz[questionCount].question;
  document.getElementById("option1").innerHTML = quiz[questionCount].option1;
  document.getElementById("option2").innerHTML = quiz[questionCount].option2;
  document.getElementById("option3").innerHTML = quiz[questionCount].option3;
  document.getElementById("option4").innerHTML = quiz[questionCount].option4;
};
loadQuestion();

let answers = document.getElementsByClassName("answer");

answers=Array.from(answers);


document.getElementById("submit").addEventListener("click", () => {
  
 
  answers.forEach((elem)=>{
    if(elem.checked){
      let  checkedAnswer=elem.value;
      if(checkedAnswer===correctAnswer[answerCount].ans){
        score++;
      }
     }

    });
  

// We have defined a function removeCheckedButton() when we move to next question it comes with already a checked button  So with this function we can uncheck the button.
let removeCheckedButton=()=>{
  answers.forEach((elem)=>{
    if(elem.checked){
      elem.checked=false;
    }
})
  }
 
  if(answerCount==questionCount){
     answerCount++;
    }
  
  questionCount++;

  // We have called the function  here.
  removeCheckedButton();

  if(questionCount<quiz.length){
    loadQuestion();
  }
    else{
      document.getElementById("score").innerHTML=`<h3>Your Score is ${score}/${quiz.length}<h3>`

    }
});

