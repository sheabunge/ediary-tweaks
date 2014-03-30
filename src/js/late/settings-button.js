var html = '<li><a href="' + chrome.extension.getURL('html/options.html') +
	'" title="Options" class="ediary-tweaks-options" target="_blank"></a>';
document.querySelector('a[href="#nav-week-next"]').parentNode.insertAdjacentHTML('afterend', html);
