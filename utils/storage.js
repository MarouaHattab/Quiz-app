const STORAGE_KEYS = {
    QUIZ_HISTORY: 'quizHistory',
    USER_PREFERENCES: 'userPreferences'
};

function saveQuizResult(result) {
    try {
        const existingResults = getQuizHistory();
        existingResults.push(result);
        
        // Sort by timestamp (newest first)
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

function getQuizHistoryByTopic(topic) {
    try {
        const allHistory = getQuizHistory();
        return allHistory.filter(result => result.topic.toLowerCase() === topic.toLowerCase());
    } catch (error) {
        console.error('Error getting quiz history by topic:', error);
        return [];
    }
}

function getLatestQuizResult() {
    try {
        const history = getQuizHistory();
        return history.length > 0 ? history[0] : null;
    } catch (error) {
        console.error('Error getting latest quiz result:', error);
        return null;
    }
}

function saveUserPreferences(preferences) {
    try {
        localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
        return true;
    } catch (error) {
        console.error('Error saving user preferences:', error);
        return false;
    }
}

function getUserPreferences() {
    try {
        const preferences = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
        return preferences ? JSON.parse(preferences) : {};
    } catch (error) {
        console.error('Error getting user preferences:', error);
        return {};
    }
}

function isLocalStorageAvailable() {
    try {
        const test = 'localStorage-test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (error) {
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

// Export functions (make them available globally)
if (typeof window !== 'undefined') {
    window.StorageHelper = {
        saveQuizResult,
        getQuizHistory,
        clearQuizHistory,
        getQuizHistoryByTopic,
        getLatestQuizResult,
        saveUserPreferences,
        getUserPreferences,
        isLocalStorageAvailable,
        formatDateForStorage,
        createQuizResult,
        STORAGE_KEYS
    };
}