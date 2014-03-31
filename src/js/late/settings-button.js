var settingsLink = document.createElement('a');
settingsLink.setAttribute('href', 'html/options.html');
settingsLink.setAttribute('title', 'Options');
settingsLink.setAttribute('target', '_blank');
settingsLink.className = 'ediary-tweaks-options';

var settingsButton = document.createElement('li');
settingsButton.appendChild(settingsLink);

document.querySelector('#top-nav > ul').insertBefore(settingsButton, document.querySelector('#top-nav .previous').parentNode);
