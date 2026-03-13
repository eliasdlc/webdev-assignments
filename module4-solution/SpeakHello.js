// IIFE encapsula todo para evitar contaminar el scope global.
// Solo exponemos el objeto helloSpeaker con su método speak.
(function (global) {

  // Objeto que expone únicamente el método speak
  var helloSpeaker = {};

  // speakWord queda privado dentro del IIFE — no se expone
  var speakWord = "Hello";

  // Adjuntamos speak al objeto en lugar de declararlo como función suelta
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Exponemos helloSpeaker al scope global para que script.js lo use
  global.helloSpeaker = helloSpeaker;

})(window);
