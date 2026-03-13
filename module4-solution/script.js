// IIFE para encapsular el code principal y evitar variables globales innecesarias
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // Iteramos sobre el array de nombres
    for (var i = 0; i < names.length; i++) {

        // Tomamos la primera letra en minúscula para comparar sin importar capitalización
        var firstLetter = names[i].charAt(0).toLowerCase();

        // Si empieza con 'j', despedimos; de lo contrario, saludamos
        if (firstLetter === "j") {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

})();
