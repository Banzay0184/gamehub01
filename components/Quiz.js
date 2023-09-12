const quizData = [
    {
        question: 'Is there a multiplayer mode in this game ?',
        img: 'https://files.vgtimes.ru/posts/2021-01/1611171791_566.jpg',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'Can I play this game on a computer ?',
        img: 'https://trashbox.ru/ifiles/841173_b97b6c_screenshot_06/clash-of-clans-android-10.png',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'Can I play this game on console ?',
        img: 'https://cdn.bynogame.com/games/gta5-1680773154864.jpeg',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Does this game have a storyline ?',
        img: 'https://gameguru.ru/media/cache/45/0a/450acd26d34847d9f38c66a36db29b75.jpg',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Does the game have the ability to interact with other players ?',
        img: 'https://w0.peakpx.com/wallpaper/105/594/HD-wallpaper-video-game-minecraft.jpg',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Is it possible to create your own character in this game ?',
        img: 'https://sportyakutia.ru/images/1fotoposel/1posel2022/may22/CSGO_Tournaments_2.jpg',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'Does the game have a progression and character development system ?',
        img: 'https://e0.pxfuel.com/wallpapers/469/24/desktop-wallpaper-diablo-nightflame-wall-xiaomi-samsung-immortal-night-flame-iphone-thumbnail.jpg',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Does the game have a co-op mode ?',
        img: 'https://i.playground.ru/p/CfdUfxLnXojPFUQPWjbVDQ.jpeg',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'Does the game have an achievement or trophy system ?',
        img: 'https://w0.peakpx.com/wallpaper/396/155/HD-wallpaper-efootball-2022-new-gaming.jpg',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'Can this game be played on a mobile device?',
        img: 'https://cybersport.metaratings.ru/_images/insecure/w-1360:h-1040/bG9jYWw6Ly8vaW1hZ2VzL2Y4LzVlL2Y4NWViMWU5YzQwOGZmYTgyMGE3YThkMDQ0OTIzYWZiLnBuZw==.webp',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    /////
    {
        question: 'Is "The Legend of Zelda: Breath of the Wild" an open-world game?',
        img: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Is "Final Fantasy VII Remake" a remake of a classic RPG?',
        img: 'https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Is "Super Mario 64" a first-person shooter game?',
        img: 'https://upload.wikimedia.org/wikipedia/ru/9/92/Super_mario_64.jpg',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'Is "Dark Souls" known for its challenging difficulty? ',
        img: 'https://upload.wikimedia.org/wikipedia/ru/0/05/Dark_Souls_Cover_Art.jpeg',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Does "Among Us" have a single-player mode?',
        img: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'is "Rocket League" set in a fantasy medieval world? ',
        img: 'https://www.harrisburgu.edu/wp-content/uploads/189dce017fb19e3ca1b94b2095d519cc514df22c.jpg',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
    {
        question: 'Does "The Witcher 3: Wild Hunt" feature a branching storyline?',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Is "Call of Duty: Warzone" a battle royale game ?',
        img: 'https://store-images.s-microsoft.com/image/apps.64530.13739535057760905.9506aae3-1290-433f-9d84-f3d91000412d.008a24a1-3dd2-4284-acd0-c538b29428b2',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Does "Overwatch" have a variety of unique heroes to choose from ?',
        img: 'https://img.youtube.com/vi/z7usG2oKONE/maxresdefault.jpg?imwidth=&imdensity=2',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
        ],
    },
    {
        question: 'Can you play "FIFA" games without controlling a soccer team ?',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/1622/XCzzcOl1IRgWQsrB9MFO7cg3.png',
        answers: [
            {text: 'Yes', correct: false},
            {text: 'No', correct: true},
        ],
    },
]

class Quiz {
    render() {
        let htmlModal = ''
        let htmlQuiz = ''

        htmlModal += `
            <div class="quiz-modal" >
                <div class="quiz-modal-back">
                    <button onclick="back()">x</button>
                </div>
                <div class="quiz-modal-title">
                    <h1>Wanna play the game</h1>
                    <svg onclick="quiz()" class="play-svg" width="84px" height="84px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#705091]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#705091]"> </path> </g> </g> </g> </g></svg>
                </div>
            </div>
            `

        htmlQuiz += `
                <div class="quizs hide">
                    <img id="img-quiz"  src="" alt="">
                    <button onclick="backQuiz()" class="quiz-btn2">Back</button>
                    <div class="quiz-box">
                        <h1 id="question">Is there a multiplayer mode in this game?</h1>
                        <div class="answer-btn" id="answer-btn">
                        </div>
                    </div>
                </div>
        `
        const htmltop = `
                ${htmlQuiz}
                ${htmlModal}
            `;

        ROOT_QUIZ.innerHTML = htmltop;
    }
}

const quizPage = new Quiz();
quizPage.render();


function back() {
    document.querySelector('.quiz-modal').classList.add('hide')
}

function quiz() {
    document.querySelector('.quiz-modal').classList.add('hide')
    document.querySelector('.quizs').classList.remove('hide')
    document.querySelector('#menu').classList.add('hide')
    document.querySelector('#top').classList.add('hide')

}

function backQuiz() {
    document.querySelector('#quiz').classList.add('hide')
    document.querySelector('#menu').classList.remove('hide')
    document.querySelector('#top').classList.remove('hide')
}

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-btn')


let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    showQuestion()
}


function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question
    document.getElementById('img-quiz').src = currentQuestion.img
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('quiz-btn')
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if (isCorrect) {
        selectedBtn.classList.add('correct')
        score++
    } else {
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true
    });

    function showScore() {
        resetState()
        questionElement.innerHTML = `You scored ${score} out of ${quizData.length}`

    }

    function handleNextButton() {
        currentQuestionIndex++
        if (currentQuestionIndex < quizData.length) {
            showQuestion()
        } else {
            showScore()
        }
    }

    if (currentQuestionIndex < quizData.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
}

startQuiz()

