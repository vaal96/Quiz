const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
//const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');
const introContainer= document.getElementById('intro-container')
const results = document.getElementById('results');
const isCorrect = document.getElementById('isCorrect');
const forumContainer = document.getElementById('forum-container');

let shuffledQuestions = [];
let currentQuestionIndex = 0;
//trying TODAY:
var count=90;
var counter;

 //1000 will  run it every 1 second
// create questions here
const questions = [
	{
	  question: 'How many days does it take for the Earth to orbit the Sun?',
	  answers: [
		{ text: '150' },
		{ text: '189'},
		{ text: '365'},
		{ text: '289' }
	  ],
	  correct: '365'
	},
	{
	  question: 'Random question in the mean time?',
	  answers: [
		{ text: 'answer'},
		{ text: 'wrong' },
		{ text: 'wrong' },
		{ text: 'wrong' }
	  ],
	  correct:'answer'
	},
	{
	  question: 'Fill in the blank question?',
	  answers: [
		{ text: 'Kinda' },
		{ text: 'YES!!!'},
		{ text: 'Um no'},
		{ text: 'IDK'}
	  ],
	  correct: 'YES!!!'
	},
	{
	  question: 'What is 4 * 2?',
	  answers: [
		{ text: '6' },
		{ text: '9' },
		{ text: '8' },
		{ text: '21' }
	

	  ],
	  correct: '8' 
	}
]

function timer(){
  count--;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " Seconds Left "; // watch for spelling
}
// ? 
//answers
// start Quiz const + function for timer 
//start button >
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - .5);
	console.log(questions)
	counter=setInterval(timer, 1000);
	introContainer.classList.add('hide')
	results.classList.add('hide')
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove('hide');
    nextQuestion();
}


// const for next button / create the function 


function nextQuestion(){
	// resetQuiz();
	showQuestion(shuffledQuestions[currentQuestionIndex]);

}
// got from a Youtube Video Tutorial:
function showQuestion(question) {
	answerButtonsElement.innerHTML="";
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
	  const button = document.createElement('button')
	  button.innerText = answer.text
	  button.classList.add('btn') 
	  button.classList.add('list-item')
	  button.id="answers"; 
	  answerButtonsElement.append(button)
	})
}
// reset quiz
function resetQuiz() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
	//   answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
	e.preventDefault();
	if(e.target.matches("button")){
		const selectedButton = e.target
		const usersChoice=(selectedButton.textContent);
		if( usersChoice === shuffledQuestions[currentQuestionIndex].correct){
			count=+10 
			isCorrect.innerText="correct"
		}else{
			count=-10
			isCorrect.innerText="wrong"
		} 
		currentQuestionIndex++;
		console.log("Line 134 ", shuffledQuestions.length)
		console.log("Line 135 ", currentQuestionIndex)
		if(currentQuestionIndex < shuffledQuestions.length){
			nextQuestion();	
			return;
		}
		// quizEnd();
	}
}
//testing: 11pm
localStorage.setItem('isCorrect', JSON.stringify(questions));

// Retrieve the object from storage

// function quizEnd(){
// 	const isCorrect.localStorage.setItem("userInitials, isCorrect")
// 	localStorage.setItem([0].value, totalScore);
// }

  
function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
	  element.classList.add('correct')
	} else {
	  element.classList.add('wrong')
	}
  }
  
  function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

answerButtonsElement.addEventListener('click', selectAnswer)
//nextButton.addEventListener('click', nextQuestion);


// saving them in local storage ?
// window.localStorage.setItem('name', 'SCORE');

// display in different HTML linked to same JS


// var quiz = new Quiz(questions);
 
// display quiz
// populate();