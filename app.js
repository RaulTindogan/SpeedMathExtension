let startBtn = document.getElementById('startBtn')
let userInput = document.getElementById('userAnswer')
let userInputContainer = document.getElementById('userInputContainer')
let enterBtn = document.getElementById('enterBtn')
let nextBtn = document.getElementById('nextBtn')
let userScore = document.getElementById('userScore')
let operand1HTML = document.getElementById('operand1')
let operand2HTML = document.getElementById('operand2')
let operator = document.getElementById('operator')
let questionContainer = document.getElementById('question-container')
let timerContainer = document.getElementById('timer')
let itemsContainer = document.getElementById('items')
let modal = document.getElementById('modal')
let yesBtn = document.getElementById('yes-btn')
let noBtn = document.getElementById('no-btn')
let finalScore = document.getElementById('done-score')
let startModal = document.getElementById('start-modal')
let playerScore = 0
let correctAnswer = null

let item = 10
let itemDone = 0
let s=10;

startBtn.addEventListener('click', ()=>{
    generateQuestion()  
    userScore.innerHTML = "Score: " + playerScore
    startModal.classList.add("display-none")
    questionContainer.classList.remove('display-none')
    startTimer()
})

enterBtn.addEventListener('click', ()=>{
    if(userInput.value == correctAnswer) {
        playerScore++;
        userScore.innerHTML = "Player Score: " + playerScore
    } 
        item--
        itemDone++
        itemsContainer.innerHTML = itemDone + "/10"
        s=10

    if(itemDone < 10 ) {
        generateQuestion()
    } else {
        enterBtn.setAttribute('disabled', 'disabled')
    }
})

yesBtn.addEventListener('click', ()=>{
    questionContainer.classList.remove('display-none')
    modal.classList.add('display-none')
    item = 10
    itemDone = 0
    playerScore = 0
    userInput.value=''
    itemsContainer.innerHTML = itemDone + "/10"
    userScore.innerHTML = "Player Score: " + playerScore
    enterBtn.removeAttribute('disabled', 'disabled')
    startTimer()
})

noBtn.addEventListener('click', ()=>{
    startModal.classList.remove('display-none')
    questionContainer.classList.add('display-none')
    modal.classList.add('display-none')
    item = 10
    itemDone = 0
    playerScore = 0
    userInput.value=''
    itemsContainer.innerHTML = itemDone + "/10"
    userScore.innerHTML = "Player Score: " + playerScore
    enterBtn.removeAttribute('disabled', 'disabled')
    startTimer()
})


// ***** For Question with options *****

// function generateQuestion() {
//     let operand1 = generateRandomNumbers()
//     let operand2 = generateRandomNumbers()

//     let correctAnswer = operand1 + operand2
//     console.log(operand1)
//     console.log(operand2)
//     generateChoices(correctAnswer)
// }

// function generateRandomNumbers() {
//     return Math.floor(Math.random() * 100) + 1
// }

// function generateChoices(correctAnswer) {
//     let choices = [correctAnswer]
//     let complete = 0
//     let dummyNumber = null
//     while(complete < 2) {
//         dummyNumber = generateRandomNumbers()
//         if(choices.includes(dummyNumber)) {
//             comtinue
//         } else {
//             choices.push(dummyNumber)
//             complete++
//         }
//     }
    
//     console.log(choices)
// }

// ***** For Question with options *****

function generateQuestion() {
    userInput.value=''
    let operand1 = generateRandomNumbers()
    let operand2 = generateRandomNumbers()

    operand1HTML.innerHTML = operand1
    operator.innerHTML = "+"
    operand2HTML.innerHTML = operand2

    correctAnswer = operand1 + operand2
}

function generateRandomNumbers() {
    return Math.floor(Math.random() * 100) + 1
}

userInput.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter') {
        enterBtn.click();
    }
})

function startTimer() {
    const timer = setInterval(() => {
       timerContainer.innerHTML = "Timer: " + s
       s--
       if(s < 0) {
        item--
        itemDone++
        itemsContainer.innerHTML = itemDone + "/10"
        s=10;
        generateQuestion()
       }  
       if(item == 0 && itemDone == 10) {
        enterBtn.setAttribute('disabled', 'disabled')
        clearInterval(timer)
        questionContainer.classList.add('display-none')
        finalScore.innerHTML = "Your Score: " + playerScore
        modal.classList.remove('display-none')
       } 
       console.log(s)  
    }, 1000);
}

