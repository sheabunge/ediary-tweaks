var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('css/app.min.css');
(document.head || document.documentElement).appendChild(style);


document.querySelector( '.brand' ).textContent += ' ' + document.querySelector( '.brand-small' ).textContent;
