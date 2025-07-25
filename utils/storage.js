const STORAGE_KEYS = {
    QUIZ_HISTORY: 'quizHistory'
};

function saveQuizResult(result) {
    try {
        const existingResults = getQuizHistory();
        existingResults.push(result);
        existingResults.sort((a, b) => b.timestamp - a.timestamp);
        localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(existingResults));
        return true;
    } catch (error) {
        console.error('Error saving quiz result:', error);
        return false;
    }
}

function getQuizHistory() {
    try {
        const history = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error getting quiz history:', error);
        return [];
    }
}

function clearQuizHistory() {
    try {
        localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
        return true;
    } catch (error) {
        console.error('Error clearing quiz history:', error);
        return false;
    }
}

function formatDateForStorage() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

function createQuizResult(topic, score, totalQuestions) {
    return {
        topic: topic.toUpperCase(),
        score: `${score}/${totalQuestions}`,
        date: formatDateForStorage(),
        timestamp: new Date().getTime()
    };
}

if (typeof window !== 'undefined') {
    window.StorageHelper = {
        saveQuizResult,
        getQuizHistory,
        clearQuizHistory,
        formatDateForStorage,
        createQuizResult,
        STORAGE_KEYS
    };
}