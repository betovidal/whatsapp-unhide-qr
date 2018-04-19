/* https://github.com/betovidal. Unhide QR code from whatsapp web page. */
var checker;
/**
 * Unhide a given canvas element by replacing it's original style.
 */
function unhide(c) {
    console.log('Unhide!');
    c.removeAttribute('style');
    c.setAttribute(
        'style', '' +
        'display:block;' +
        'position: absolute;' +
        'top: 0px;' +
        'left: 0px;'
    );
}
/**
 * Click refresh button if there's one.
 */
function clickRefresh() {
    var btn = document.querySelector('[role="button"]');
    if (btn && btn.click) {
        console.log('Click on refresh!');
        btn.click();
    }
}
/**
 * Checks if there's a canvas with the display attribute set to none.
 */
function verifyUnhide() {
    var c_arr = document.getElementsByTagName('canvas');
    var c;
    if (c_arr.length < 1) {
        console.error('No canvas elements found!');
        console.error('Uninstalling.');
        clearInterval(checker);
        delete window.unhideRunning;
        return;
    }
    clickRefresh();
    c = c_arr[0];
    if (c.style.display === 'none') {
        unhide(c);
    }
}
/**
 * Timer installation.
 */
function init() {
    clearInterval(checker);
    checker = setInterval(verifyUnhide, 500);
}
/**
 * Main call, make sure the conditions for the script to work exist.
 */
if (!window.unhideRunning && 'web.whatsapp.com' === window.location.host) {
    console.log('Installing timer.');
    window.unhideRunning = true;
    init();
} else {
    if (window.unhideRunning) {
        console.log('Unhide already running!.');
    }
    if ('web.whatsapp.com' !== window.location.host) {
        console.log('This script is intended to work on whatsapp webpage.');
    }
}

