



/* --- CURRENT QUIZ ------------------------------------------------------------------ */

// let objQuiz = PoliticalGps.loadDataQuiz(1.0);
//console.log("A versao atual do teste eh: ", objQuiz.quizVersion);
//console.log("A data da versao atual do teste eh: ", objQuiz.quizDateVersion);

/* --- CURRENT USER ------------------------------------------------------------------ */

// $.localStorage.removeAll();  // reset do local-storage
// let objUser = AppUser.getObjectUser("EXISTO.me"); // se nao existir, ja inicializa
// console.log(`objUser.noQuizYet = ${objUser.noQuizYet}`);
// console.log(`objUser.isQuizOnGoing = ${objUser.isQuizOnGoing}`);
// console.log(`objUser.isQuizComplete = ${objUser.isQuizComplete}`);
// console.log(`objUser.hasQuizUpdate = ${objUser.hasQuizUpdate}`);

/* --- JQUERY READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    // Cria instancia global para manipulacao do componente carrocel usado no teste politico:
    var GlobalCarousel = new CarouselWrapper();

    // var crsWrap = new CarouselWrapper("#carouselTest");
    // crsWrap.showIntroSlide(objUser);

    // carousel.to(1);
    // carousel.pause();

});
