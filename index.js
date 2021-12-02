
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name ? ");

console.log("welcome "+ userName + " to Do you know sir Arthur rock");



function play(question, answer)
{


var userAnswer = readlineSync.question(question);

 if(userAnswer===answer)
 {
   console.log("right");

   score = score+1;
 
 

 }

else {


   console.log("wrong");

  
}

  
}



var questions = [{


    question:"Where do I live ?",
    answer: "bhopal"
},{

 
  question:"My favorite superhero would be?",

  answer:"batman"


},{

 
  question:"My favorite football player would be?",

  answer:"messi"


},{

 
  question:"My favorite Basket player would be?",

  answer:"mjordan"


}];


for(var i = 0; i<questions.length; i++)
{

  var currentQuestion = questions[i];


  play(currentQuestion.question, currentQuestion.answer)



}

console.log("Awesome You Scored :" , score);