/** Classe para armazenamento de informacoes e configuracoes do usuario. */
class AppUser {
    // propriedades publicas: informacoes gerais
    ids = null; // identificacao do usuario no local-storage.
    name = null; // nome do usuario para emissao de certificado

    // propriedades publicas: preferencias
    prefDarkTheme = false; // true=dark/escuro, false=light/claro
    prefFontSized = 2; // 1=small/pequena, 2=normal/padrao, 3=big/grande, 4=bigger/maior
    prefPlaySound = false; // true=on/ligado, false=off/desligado
    prefDateReset = null; // null=never reset/nunca resetou, date=when reset/quando resetou

    // propriedades publicas: resultado do teste
    testQuizVersion = 1; // numero da versao do teste respondido
    testQuizStart = 1; // data em que iniciou o teste
    testQuizOpen = true; // indica se o teste esta em andamento agora
    testQuizDone = 0; // numero de questoes respondidas ate o momento
    testQuizOpts = []; // respostas para as questoes respondidas
    testQuizFinal = null; // data em que finalizou o teste
    testQuizScore = null; // pontuacao calculada para as respostas
    testQuizColor = null; // coloracao correspondente a pontuacao obtida
    testQuizImage = null; // id do plano (figura) para a pontuacao obtida

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {string} id Nome do usuario ou apenas id para o local-storage.
     */
    constructor(id) {
        this.ids = id;
        this.name = id; // por enquanto utiliza o id (default).
    }

    /** Getter. */
    get noQuizYet() {
        return this.testQuizStart == null;
    }

    /** Getter. */
    get isQuizOnGoing() {
        return this.testQuizStart != null && this.testQuizOpen;
    }

    /** Getter. */
    get isQuizComplete() {
        return this.testQuizStart != null && !this.testQuizOpen && this.testQuizFinal != null;
    }

    /** Getter. */
    get hasQuizUpdate() {
        // TODO: Notificacao para novas questoes...
        return false;
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

    /**
     * Getter da estrategia singleton para inicializacao do AppUser.
     *
     * @param  {String} objId Identificacao da instancia no local-storage.
     */
    static getAppUser(objId) {
        if ($.localStorage.isSet(objId)) {
            let objUser = $.localStorage.get(objId);
            console.table("Instancia de AppUser recuperada do LocalStorage: ", objUser);
            return objUser;
        } else {
            let objUser = new AppUser(objId);
            console.table("Nova instancia de AppUser criada e armazenada no LocalStorage: ", objUser);
            $.localStorage.set(objId, objUser);
            return objUser;
        }
    }

    /**
     * Setter da estrategia singleton para inicializacao do AppUser.
     *
     * @param  {String} objUser Instancia do AppUser para salvar no local-storage.
     */
    static setAppUser(objUser) {
        $.localStorage.set(objUser.ids, objUser);
        console.table("Instancia corrente de AppUser armazenada no LocalStorage: ", objUser);
        return objUser; // fluent-interface
    }
};

/** Classe para manipulacao do carrocel utilizando jQuery. */
class CarouselWrapper {
    // propriedades privadas:
    divCarousel;
    innerCarousel;
    bs5Carousel;

    // propriedades publicas:

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {string} idCarousel Identificacao da div contendo o carrocel.
     */
    constructor(idCarousel) {
        // o id eh fornecido para localizar o carrocel na pagina (dom):
        this.divCarousel = $(idCarousel);

        // daqui em diante, eh tudo padrao do bootstrap-5.
        this.bs5Carousel = $(idCarousel + " .carousel").carousel({
            // interval: false,
            // keyboard: false,
            // pause: true,
            // wrap: false,
            interval: 60000,
            wrap: true
        });
        this.innerCarousel = $(idCarousel + " .carousel-inner");
    }

    /**
     * Adiciona o html de um novo slide no carrocel.
     */
    addSlide(htmlSlide) {
        // apresenta o slide introdutorio conforme o cenario atual:
        this.innerCarousel.append(htmlSlide)
    }

    /**
     * Identifica o slide introdutorio, conforme o cenario onde o usuario se encontra.
     */
    getIntroSlide(objUser) {
        // O slide introdutorio do teste sera apresentado conforme o cenario corrente:
        if (objUser.noQuizYet) {
            // (1) se o usuario ainda nao fez o teste, apresenta slide convidando para iniciar o teste: ${itemName}
            return "#slideIntroStart";
        } else if (objUser.isQuizOnGoing) {
            // (2) se o usuario iniciou o teste mas nao finalizou, apresenta slide para retomar o teste:    slideIntro = `
            return "#slideIntroResume";
        } else if (objUser.hasQuizUpdate) {
            // (3) se tem novas questoes, apresenta slide para continuar o teste:
            return "#slideIntroNotify";
        } else if (objUser.isQuizComplete) {
            // (4) se o usuario ja finalizou o teste, apresenta slide com resultado (coloracao) do teste:
            return "slideIntroRestart";
        } else {
            return "";
        }
    }

    /**
     * Identifica o slide final, apos o usuario encerrar o teste politico.
     */
    getClosureSlide() {
        return "#slideClosure";
    }

    /**
     * Apresenta o slide introdutorio, conforme o cenario onde o usuario se encontra.
     */
    showIntroSlide(objUser) {
        // O slide introdutorio do teste sera apresentado conforme o cenario corrente:
        let slideIntro = this.getIntroSlide(objUser);
        // verifica se nao ha nenhuma inconsistencia nos dados, com cenario nao identificado:
        if (slideIntro) {
            console.log(`slideIntro = ${slideIntro}`);
            let htmlContent = $(slideIntro).html();
            this.addSlide(htmlContent);
        } else {
            console.log("Nao foi possivel identificar o slide inicial pelo estado do usuario.");
        }
    }

    /**
     * Apresenta o slide final, apos o usuario encerrar o teste politico.
     */
    showClosureSlide(objUser) {
        // O slide final sera apresentado com o resultado do teste:
        let slideClosure = this.getClosureSlide();
        // verifica se nao ha nenhuma inconsistencia nos dados, com cenario nao identificado:
        if (slideClosure) {
            console.log(`slideClosure = ${slideClosure}`);
            let htmlContent = $(slideClosure).html();
            this.addSlide(htmlContent);
        } else {
            console.log("Nao foi possivel identificar o slide final pelo estado do usuario.");
        }
    }
};




// obtem a instancia para o usuario corrente, ja existente ou nao (1a. vez)
//let objUser = getAppUser("EXISTO.me"); // se nao existir, ja inicializa
var objUser = new AppUser("EXISTO.me");
//$.localStorage.set("EXISTO.me", objUser);



console.log(`objUser.noQuizYet = ${objUser.noQuizYet}`);
console.log(`objUser.isQuizOnGoing = ${objUser.isQuizOnGoing}`);
console.log(`objUser.isQuizComplete = ${objUser.isQuizComplete}`);
console.log(`objUser.hasQuizUpdate = ${objUser.hasQuizUpdate}`);

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    var crsWrap = new CarouselWrapper("#carouselTest");
    crsWrap.showIntroSlide(objUser);

    // carousel.to(1);
    // carousel.pause();

    //alert("carrocel ok");
});
