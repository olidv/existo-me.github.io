const myCarouselElement = document.querySelector("#carouselTest");
const carousel = new bootstrap.Carousel(myCarouselElement, {
    // interval: false,
    // keyboard: false,
    // pause: true,
    // wrap: false,
    interval: 60000,
    wrap: true,
});

/** Classe para armazenamento de informacoes e configuracoes do usuario. */
class AppUser {
    // propriedades publicas: informacoes gerais
    name = null;  // nome do usuario para emissao de certificado

    // propriedades publicas: preferencias
    prefDarkTheme = false; // true=dark/escuro, false=light/claro
    prefFontSized = 2; // 1=small/pequena, 2=normal/padrao, 3=big/grande, 4=bigger/maior
    prefPlaySound = true; // true=on/ligado, false=off/desligado
    prefDateReset = null; // null=never reset/nunca resetou, date=when reset/quando resetou

    // propriedades publicas: resultado do teste
    testQuizVersion = 1; // numero da versao do teste respondido
    testQuizStart = null; // data em que iniciou o teste
    testQuizOpen = false; // indica se o teste esta em andamento agora
    testQuizDone = 0; // numero de questoes respondidas ate o momento
    testQuizOpts = []; // respostas para as questoes respondidas
    testQuizFinal = null; // data em que finalizou o teste
    testQuizScore = null; // pontuacao calculada para as respostas
    testQuizColor = null; // coloracao correspondente a pontuacao obtida
    testQuizImage = null; // id do plano (figura) para a pontuacao obtida

    /**
     * Inicializacao.
     *
     * @param  {[type]} config [description]
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * methodThree description
     *
     * @private
     * @param  {String} str [description]
     * @return {String}     [description]
     */
    // age() {
    //     let date = new Date();
    //     return date.getFullYear(); // - this.#width;
    // }

    /** Getter. */
    // get area() {
    //     return this.calcArea();
    // }

    /**
     * methodTwo description
     *
     * @param  {Object} fruit      [description]
     * @param  {String} fruit.name [description]
     * @return {String}            [description]
     */
    // calcArea() {
    //     return this.height * this.#width;
    // }
}

function getAppUser(objName) {
    if ($.localStorage.isSet(objName)) {
        let objUser = $.localStorage.get(objName);
        console.table("Instancia de AppUser recuperada do LocalStorage: ", objUser);
        return objUser;

    } else {
        let objUser = new AppUser(objName);
        console.table("Nova instancia de AppUser criada e armazenada no LocalStorage: ", objUser);
        $.localStorage.set(objName, objUser);
        return objUser;
    }
};

function setAppUser(objUser) {
    $.localStorage.set(objUser.name, objUser); // Set storage.foo to "value"
    console.table("Instancia corrente de AppUser armazenada no LocalStorage: ", objUser);
    return objUser;  // fluent-interface
};


(function ($) {
    ("use strict");

    // carousel.to(1);
    // carousel.pause();

    // obtem a instancia para o usuario corrente, ja existente ou nao:
    let objUser = getAppUser("nobody");


})(jQuery);
