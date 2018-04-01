document.addEventListener("DOMNodeInserted", function(event) {
    if (!!window && !(!!window.$)) {
        window.$ = window.jQuery = require('node_modules/jquery/dist/jquery.min.js');
    }
});