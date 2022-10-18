const questions = [
    {
        question: "Ni doms are: ",
        optionA: "ENTP and INTP",
        optionB: "INFJ and ENTP",
        optionC: "INTJ and INTP",
        optionD: "INTJ and INFJ",
        correctOption: "optionD"
    },

    {
        question: "Which 'group' is the most likely to use abstract theories while explaining something ?",
        optionA: "Sentinels",
        optionB: "Diplomats",
        optionC: "Explorers",
        optionD: "Analysts",
        correctOption: "optionD"
    },

    {
        question: "Which personality types place high value on tradition ?",
        optionA: "Sentinels",
        optionB: "Diplomats",
        optionC: "Analysts",
        optionD: "Explorers",
        correctOption: "optionA"
    },

    {
        question: "ESTPs are known for being ?",
        optionA: "calm",
        optionB: "cold",
        optionC: "impulsive",
        optionD: "planners",
        correctOption: "optionC"
    },

    {
        question: "The most sensitive type is: ",
        optionA: "infj",
        optionB: "enfp",
        optionC: "isfp",
        optionD: "infp",
        correctOption: "optionD"
    },

    {
        question: "Which personality type is most likely to win a debate ?",
        optionA: "entp",
        optionB: "entj",
        optionC: "intj",
        optionD: "istp",
        correctOption: "optionA"
    },

    {
        question: "Intuitive types are most likely to focus on: ",
        optionA: "The big picture",
        optionB: "Small details",
        optionC: "both of them, in different occasions",
        optionD: "They normally rather focus on feelings",
        correctOption: "optionA"
    },

    {
        question: "What is the order of the four divisions of MBTI ?",
        optionA: "I and E, N and S, F and T, P and J",
        optionB: "I and E, T and F, P and J, N and S",
        optionC: "N and S, F and T, J or P, I and E",
        optionD: "F and T, J and P, I and E, N and S",
        correctOption: "optionA"
    },

    {
        question: "The functions that guide throught your decisions are",
        optionA: "Ni/Ne and Si/Se",
        optionB: "Fe/Fi and Si/Se",
        optionC: "Ti/Te and Ni/Ne",
        optionD: "Fe/Fi and Ti/Te",
        correctOption: "optionD"
    },

    {
        question: "Is 16personalities a reliable source ?",
        optionA: "no",
        optionB: "yes",
        optionC: "i identify with my results on their test, so yes",
        optionD: "idk man",
        correctOption: "optionA"
    },

    {
        question: "Which personality type is most likely to plan a lot before acting ?",
        optionA: "infp",
        optionB: "istp",
        optionC: "intj",
        optionD: "enfj",
        correctOption: "optionC"
    },

    {
        question: "The area you're gonna work is highly influenced by your personality type",
        optionA: "lmao what",
        optionB: "yes",
        optionC: "not really",
        optionD: "eh, i suppose",
        correctOption: "optionA"
    },


    {
        question: "What is the best way to find out your mbti ?",
        optionA: "16personalities",
        optionB: "studying about cognitive functions and seeing what fits you the best.",
        optionC: "Sakirnova",
        optionD: "Seeing a professional in mbti typing.",
        correctOption: "optionB"
    },

    {
        question: " ?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionD"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionA"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionC"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionA"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionC"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionD"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionA"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionD"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionB"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionB"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionC"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}