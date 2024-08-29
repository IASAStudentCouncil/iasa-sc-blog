// src/js/gtag.js

// This is the Google Analytics global site tag (gtag.js) that should be included in the <head> of your HTML.
export function initGtag() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
    dataLayer.push(arguments);
    }
    gtag('js', new Date());

    // Replace 'G-9CFDMS82J9' with your actual measurement ID.
    gtag('config', 'G-9CFDMS82J9');
}

// Initialize the gtag when the script loads.
initGtag();
