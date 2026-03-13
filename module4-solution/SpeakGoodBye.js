// Mismo patrón que SpeakHello.js: IIFE para encapsular, objeto para exponer.
(function (global) {

    var byeSpeaker = {};

    // speakWord es privado — no colisiona con el speakWord de SpeakHello.js
    var speakWord = "Good Bye";

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    global.byeSpeaker = byeSpeaker;

})(window);
