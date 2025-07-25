const quizTopic = document.querySelector('meta[name="quiz-topic"]').getAttribute('content');
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let userAnswers = [];

const questionNumberEl = document.getElementById('questionNumber');
const questionTextEl = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultsContainer = document.getElementById('resultsContainer');
const scoreMessage = document.getElementById('scoreMessage');

function initQuiz() {
    if (quizTopic === 'css') {
        console.log('This is the CSS quiz page');
        questions = QuizData.css;
    } else if (quizTopic === 'javascript') {
        console.log('This is the JavaScript quiz page');
        questions = QuizData.javascript;
    } else if (quizTopic === 'html') {
        console.log('This is the HTML quiz page');
        questions = QuizData.html;
    }
    
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    
    questionTextEl.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-option';
        button.setAttribute('data-value', index);
        
        const span = document.createElement('span');
        span.className = 'option-text';
        span.textContent = option;
        button.appendChild(span);
        
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });
    
    nextBtn.disabled = true;
}

function selectAnswer(selectedIndex, selectedButton) {
    document.querySelectorAll('.answer-option').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    selectedButton.classList.add('selected');
    
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        const correctButton = document.querySelector(`[data-value="${question.correctAnswer}"]`);
        correctButton.classList.add('correct');
    }
    
    nextBtn.disabled = false;
    
    document.querySelectorAll('.answer-option').forEach(btn => {
        btn.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    }
}

function submitQuiz() {
    document.querySelector('.quiz-content').style.display = 'none';
    document.querySelector('.quiz-controls').style.display = 'none';
    
    resultsContainer.style.display = 'block';
    
    scoreMessage.textContent = `You scored ${score} out of ${questions.length}!`;
    
    saveQuizResult();
}

function saveQuizResult() {
    if (typeof StorageHelper !== 'undefined') {
        const result = StorageHelper.createQuizResult(quizTopic, score, questions.length);
        
        if (StorageHelper.saveQuizResult(result)) {
            console.log('Quiz result saved successfully:', result);
        } else {
            console.error('Failed to save quiz result');
        }
    } else {
        console.error('StorageHelper not available');
    }
}

function getQuizHistory() {
    if (typeof StorageHelper !== 'undefined') {
        return StorageHelper.getQuizHistory();
    } else {
        console.error('StorageHelper not available');
        return [];
    }
}

nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);

document.querySelector('.results-actions .btn-primary').onclick = function() {
    location.href = '../index.html';
};

document.addEventListener('DOMContentLoaded', initQuiz);

window.getQuizHistory = getQuizHistory;