const htmlButton = document.querySelector('button[data-topic="html"]');
const cssButton = document.querySelector('button[data-topic="css"]');
const jsButton = document.querySelector('button[data-topic="javascript"]');
const viewHistoryButton = document.getElementById('historyBtn');

htmlButton.addEventListener('click', function() {
    console.log('HTML Quiz button clicked!');
    console.log('Topic:', this.dataset.topic); 
    window.location.href = 'pages/quizHtml.html'; 
}
);
cssButton.addEventListener('click', function() {
    console.log('CSS Quiz button clicked!');
    console.log('Topic:', this.dataset.topic); 
    window.location.href = 'pages/quizCss.html';
}
);
jsButton.addEventListener('click', function() {
    console.log('JavaScript Quiz button clicked!');
    console.log('Topic:', this.dataset.topic);
    window.location.href = 'pages/quizJs.html';
}
);
viewHistoryButton.addEventListener('click', function() {
    console.log('View History button clicked!');
    window.location.href = 'pages/history.html';
});