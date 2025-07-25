const htmlHistoryContainer = document.getElementById('htmlQuizHistory');
const cssHistoryContainer = document.getElementById('cssQuizHistory');
const javascriptHistoryContainer = document.getElementById('javascriptQuizHistory');
const clearAllHistoryBtn = document.getElementById('clearAllHistory');

function initHistory() {
    if (typeof StorageHelper !== 'undefined') {
        loadHistoryByTopic();
        setupEventListeners();
    } else {
        console.error('StorageHelper not available');
    }
}

function loadHistoryByTopic() {
    const allHistory = StorageHelper.getQuizHistory();
    
    const htmlHistory = allHistory.filter(result => result.topic === 'HTML');
    const cssHistory = allHistory.filter(result => result.topic === 'CSS');
    const jsHistory = allHistory.filter(result => result.topic === 'JAVASCRIPT' || result.topic === 'JS');
    
    displayTopicHistory(htmlHistoryContainer, htmlHistory, 'HTML');
    displayTopicHistory(cssHistoryContainer, cssHistory, 'CSS');
    displayTopicHistory(javascriptHistoryContainer, jsHistory, 'JavaScript');
}

function createHistoryItemHTML(result, quizName) {
    const date = new Date(result.timestamp);
    const dateFormatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const timeFormatted = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return `
        <div class="quiz-history-item">
            <div class="quiz-history-header">
                <h4 class="quiz-title">${quizName} Quiz</h4>
                <div class="quiz-score">${result.score}</div>
            </div>
            <p class="quiz-date">${dateFormatted} at ${timeFormatted}</p>
        </div>
    `;
}

function displayTopicHistory(container, history, topicName) {
    if (history.length === 0) {
        container.innerHTML = '<div class="no-history">No history found</div>';
        return;
    }
    
    let historyHTML = '';
    
    history.forEach((result) => {
        historyHTML += createHistoryItemHTML(result, topicName);
    });
    
    container.innerHTML = historyHTML;
}

function setupEventListeners() {
    clearAllHistoryBtn.addEventListener('click', clearAllHistory);
}

function clearAllHistory() {
    const confirmation = confirm('Are you sure you want to clear all quiz history? This action cannot be undone.');
    
    if (confirmation) {
        if (StorageHelper.clearQuizHistory()) {
            console.log('All quiz history cleared successfully');
            
            location.reload();
        } else {
            console.error('Failed to clear quiz history');
            alert('Failed to clear quiz history. Please try again.');
        }
    }
}

document.addEventListener('DOMContentLoaded', initHistory);

window.loadHistoryByTopic = loadHistoryByTopic;