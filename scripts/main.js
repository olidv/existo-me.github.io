/* --- POLITICAL GPS CLASS ------------------------------------------------------------------ */

/** Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas. */
class PoliticalGps {
    // propriedades publicas:

    // propriedades publicas:
    quizLastVersion = 1.0; // numero da ultima versao do teste
    quizDateVersion = null; // data da liberacao desta versao do teste
    quizTotalBasicQueries = 0; // numero total de questoes do teste
    quizListBasicQueries = []; // lista de questoes a serem respondidas
    quizTotalExtraQueries = 0; // numero total de questoes do teste
    quizListExtraQueries = []; // lista de questoes a serem respondidas

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {string} version Nome do usuario ou apenas id para o local-storage.
     */
    constructor(version) {
        // a versao pode ser utilizada na notificacao de novas questoes.
        this.quizVersion = version;
    }

    /**
     * Carrega a definicao do teste Gps Politico em nova instancia de PoliticalGps.
     */
    static loadDataQuiz(version) {
        //console.table("Ultima versao do dataQuiz: ", dataQuiz);

        // transfere os valores para uma nova instancia de PoliticalGps...
        let objQuiz = new PoliticalGps(version);
        objQuiz = Object.assign(objQuiz, dataQuiz);
        console.table("Nova instancia de PoliticalGps criada: ", objQuiz);

        return objQuiz;
    }
}

/* --- CAROUSEL CLASS ------------------------------------------------------------------ */

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
            wrap: true,
        });
        this.innerCarousel = $(idCarousel + " .carousel-inner");
    }

    /**
     * Adiciona o html de um novo slide no carrocel.
     */
    addSlide(htmlSlide) {
        // apresenta o slide introdutorio conforme o cenario atual:
        this.innerCarousel.append(htmlSlide);
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
            //console.log(`slideIntro = ${slideIntro}`);
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
            //console.log(`slideClosure = ${slideClosure}`);
            let htmlContent = $(slideClosure).html();
            this.addSlide(htmlContent);
        } else {
            console.log("Nao foi possivel identificar o slide final pelo estado do usuario.");
        }
    }
}

/* --- USER CLASS ------------------------------------------------------------------ */

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
    quizVersion = 1; // numero da versao do teste respondido
    quizDateStart = null; // data em que iniciou o teste
    quizFlagOpen = false; // indica se o teste esta em andamento agora
    quizTotalBasic = 0; // numero de questoes do teste basico respondidas ate o momento
    quizTotalExtra = 0; // numero de questoes do teste extra respondidas ate o momento
    quizUserOpts = []; // respostas para as questoes respondidas
    quizDateFinal = null; // data em que finalizou o teste
    quizUserScore = null; // pontuacao calculada para as respostas
    quizHexColor = null; // coloracao correspondente a pontuacao obtida
    quizFileImage = null; // id do plano (figura) para a pontuacao obtida

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {string} id Nome do usuario ou apenas id para o local-storage.
     */
    constructor(id) {
        this.ids = id;
        this.name = id; // por enquanto utiliza o id (default).
    }

    /** Getter: numero total de questoes respondidas ate o momento. */
    get quizTotalDone() {
        return this.quizTotalBasic + this.quizTotalExtra;
    }

    /** Getter. */
    get noQuizYet() {
        return this.quizDateStart == null;
    }

    /** Getter. */
    get isQuizOnGoing() {
        return this.quizDateStart != null && this.quizFlagOpen;
    }

    /** Getter. */
    get isQuizComplete() {
        return this.quizDateStart != null && !this.quizFlagOpen && this.quizDateFinal != null;
    }

    /** Getter. */
    get hasQuizUpdate() {
        // TODO: Notificacao para novas questoes...
        return false;
    }

    /**
     * Getter da estrategia singleton para inicializacao do AppUser.
     *
     * @param  {String} objId Identificacao da instancia no local-storage.
     */
    static getObjectUser(objId) {
        let objUser = new AppUser(objId);

        // se ja estivder salvo no local-storage, recupera as propriedades:
        if ($.localStorage.isSet(objId)) {
            let objStorage = $.localStorage.get(objId);
            console.table("Valores de AppUser recuperados do LocalStorage: ", objStorage);
            // transfere os valores para uma nova instancia de AppUser...
            objUser = Object.assign(objUser, objStorage);
        } else {
            console.table("Nova instancia de AppUser criada e armazenada no LocalStorage: ", objUser);
            $.localStorage.set(objId, objUser);
            return objUser;
        }

        return objUser;
    }

    /**
     * Setter da estrategia singleton para inicializacao do AppUser.
     *
     * @param  {String} objUser Instancia do AppUser para salvar no local-storage.
     */
    static setObjectUser(objUser) {
        $.localStorage.set(objUser.ids, objUser);
        console.table("Instancia corrente de AppUser armazenada no LocalStorage: ", objUser);
        return objUser; // fluent-interface
    }
}

/* --- CURRENT QUIZ ------------------------------------------------------------------ */

let objQuiz = PoliticalGps.loadDataQuiz(1.0);
//console.log("A versao atual do teste eh: ", objQuiz.quizVersion);
//console.log("A data da versao atual do teste eh: ", objQuiz.quizDateVersion);

/* --- CURRENT USER ------------------------------------------------------------------ */

// obtem a instancia para o usuario corrente, ja existente ou nao (1a. vez)
//$.localStorage.removeAll();  // reset do local-storage
let objUser = AppUser.getObjectUser("EXISTO.me"); // se nao existir, ja inicializa
// console.log(`objUser.noQuizYet = ${objUser.noQuizYet}`);
// console.log(`objUser.isQuizOnGoing = ${objUser.isQuizOnGoing}`);
// console.log(`objUser.isQuizComplete = ${objUser.isQuizComplete}`);
// console.log(`objUser.hasQuizUpdate = ${objUser.hasQuizUpdate}`);

/* --- JQUERY READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    var crsWrap = new CarouselWrapper("#carouselTest");
    crsWrap.showIntroSlide(objUser);

    // carousel.to(1);
    // carousel.pause();

    //alert("carrocel ok");
});
