const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')

let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');
var counter;
const introContainer= document.getElementById('intro-container')
const results = document.getElementById('results');
//trying TODAY:
var count=90;

 //1000 will  run it every 1 second


function timer(){
  count=count-1;
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
	counter=setInterval(timer, 1000);
	introContainer.classList.add('hide')
	results.classList.add('hide')
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove('hide');
    nextQuestion();
}


// const for next button / create the function 
nextButton.addEventListener('click', nextQuestion);

function nextQuestion(){
	resetQuiz();
	shuffledQuestions = questions.sort(() => Math.random() - .5);
	showQuestion(shuffledQuestions[currentQuestionIndex]);

}
// got from a Youtube Video Tutorial:
function showQuestion(question) {
	questionElement.innerText = question.question
	questions.answers.forEach(answer => {
	  const button = document.createElement('button')
	  button.innerText = answer.text
	  button.classList.add('btn')
	  if (answer.correct) {
		button.dataset.correct = answer.correct
	  }
	  button.addEventListener('click', selectAnswer)
	  answerButtonsElement.appendChild(button)
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
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button => {
	  setStatusClass(button, button.dataset.correct)
	})
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
	  nextButton.classList.remove('hide')
	} else {
	  startButton.innerText = 'Restart'
	  startButton.classList.remove('hide')
	}
  }
  
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



// create questions here
const questions = [
	{
	  question: 'How many days does it take for the Earth to orbit the Sun?',
	  answers: [
		{ text: '365', correct: true },
		{ text: '289', correct: false }
	  ]
	},
	{
	  question: 'Random question in the mean time?',
	  answers: [
		{ text: 'answer', correct: true },
		{ text: 'wrong', correct: false },
		{ text: 'wrong', correct: false },
		{ text: 'wrong', correct: false }
	  ]
	},
	{
	  question: 'Fill in the blank question?',
	  answers: [
		{ text: 'Kinda', correct: true },
		{ text: 'YES!!!', correct: true },
		{ text: 'Um no', correct: false },
		{ text: 'IDK', correct: false }
	  ]
	},
	{
	  question: 'What is 4 * 2?',
	  answers: [
		{ text: '6', correct: false },
		{ text: '8', correct: true }
	  ]
	}
  ]

// saving them in local storage ?
window.localStorage.setItem('name', 'SCORE');

// display in different HTML linked to same JS


// var quiz = new Quiz(questions);
 
// display quiz
// populate();