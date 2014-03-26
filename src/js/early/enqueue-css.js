
// Add themes classes
var base = document.documentElement;
base.classList.add('primary-blue');
base.classList.add('secondary-teal');
base.classList.add('chrome-black');

// Enqueue stylesheet
var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('css/app.min.css');
(document.head || document.documentElement).appendChild(style);
