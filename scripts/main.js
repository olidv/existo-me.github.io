



/* --- CURRENT QUIZ ------------------------------------------------------------------ */

let objQuiz = PoliticalGps.loadDataQuiz(1.0);
//console.log("A versao atual do teste eh: ", objQuiz.quizVersion);
//console.log("A data da versao atual do teste eh: ", objQuiz.quizDateVersion);

/* --- CURRENT USER ------------------------------------------------------------------ */

// obtem a instancia para o usuario corrente, ja existente ou nao (1a. vez)
$.localStorage.removeAll();  // reset do local-storage
let objUser = AppUser.getObjectUser("EXISTO.me"); // se nao existir, ja inicializa
// console.log(`objUser.noQuizYet = ${objUser.noQuizYet}`);
// console.log(`objUser.isQuizOnGoing = ${objUser.isQuizOnGoing}`);
// console.log(`objUser.isQuizComplete = ${objUser.isQuizComplete}`);
// console.log(`objUser.hasQuizUpdate = ${objUser.hasQuizUpdate}`);

/* --- JQUERY READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    // estado inicial das preferencias do usuario:
    $("#switchSchemeColor").val(GlobalPreferences.isSchemeDark);
    $("#rangeFontSize").val(GlobalPreferences.ordFontSize);
    $("#switchSoundAlert").val(GlobalPreferences.isSoundOn);

    // eventos para tratamento das alteracoes das preferencias:
    $("#switchSchemeColor").change(function () {
        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
        GlobalPreferences.isSchemeDark = this.checked;
    });
    // eventos para tratamento das alteracoes das preferencias:
    $("#rangeFontSize").change(function () {
        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
        GlobalPreferences.ordFontSize = this.value;
    });
    // eventos para tratamento das alteracoes das preferencias:
    $("#switchSoundAlert").change(function () {
        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
        GlobalPreferences.isSoundOn = this.checked;
    });

    var crsWrap = new CarouselWrapper("#carouselTest");
    crsWrap.showIntroSlide(objUser);

    // carousel.to(1);
    // carousel.pause();

    //alert("carrocel ok");
});
