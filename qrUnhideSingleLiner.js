javascript:(function () { var checker; function unhide(c) { console.log('Unhide!'); c.removeAttribute('style'); c.setAttribute( 'style', '' + 'display:block;' + 'position: absolute;' + 'top: 0px;' + 'left: 0px;'); } function clickRefresh() { var btn = document.querySelector('[role="button"]'); if (btn && btn.click) { console.log('Click on refresh!'); btn.click(); } } function verifyUnhide() { var c_arr = document.getElementsByTagName('canvas'); var c; if (c_arr.length < 1) { console.error('No canvas elements found!'); console.error('Uninstalling.'); clearInterval(checker); delete window.unhideRunning; return; } clickRefresh(); c = c_arr[0]; if (c.style.display === 'none') { unhide(c); } } function init() { clearInterval(checker); checker = setInterval(verifyUnhide, 500); } if (!window.unhideRunning && 'web.whatsapp.com' === window.location.host) { console.log('Installing timer.'); window.unhideRunning = true; init(); } else { if (window.unhideRunning) { console.log('Unhide already running!.'); } if ('web.whatsapp.com' !== window.location.host) { console.log('This script is intended to work on whatsapp webpage.'); } } })();
