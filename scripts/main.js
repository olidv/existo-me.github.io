/* --- POLITICAL GPS TEST CLASS -------------------------------------------- */

/**
 * Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas.
 *
 */
class PoliticalTest {
    // propriedades publicas:
    testVersion = 0.0; // numero da versao do teste
    testLength = 0; // numero total de questoes do teste
    testQuests = []; // lista de questoes a serem respondidas
    testLabels = []; // denominacao para os eixos conforme a pontuacao (outcome):

    // propriedades privadas: controle do generator de quetoes:
    currentQuest = 0; // numero da questao corrente do teste em andamento

    // maximos valores possiveis para o score:
    max_econ = 0;
    max_govt = 0;
    max_dipl = 0;
    max_scty = 0;

    // valor da pontuacao de cada questao respondida:
    val_econ = [];
    val_govt = [];
    val_dipl = [];
    val_scty = [];

    /* --- INITIALIZATION -------------------------------------------------- */

    /**
     * Inicializacao de nova instancia.
     *
     */
    constructor() {
        this.testVersion = 1.0; // numero da versao basica do teste.
    }

    /**
     * Carrega a definicao do teste Gps Politico em nova instancia de PoliticalGps.
     *
     * @param  {Object} data Dados mais recentes do teste do GPS Politico.
     */
    static loadInstance(data) {
        let newInstance = new PoliticalTest();

        // transfere os valores recebidos para uma nova instancia de PoliticalTest...
        newInstance = Object.assign(newInstance, data);
        console.log("Nova instancia de PoliticalTest criada com sucesso: ", newInstance);

        return newInstance;
    }

    /**
     * .
     *
     * @param  {Number} currentQuery .
     * @param  {array} choices .
     */
    initQuiz(currentQuery, choices) {
        // posiciona na proxima questao, conforme onde o usuario se encontrava.
        this.currentQuest = currentQuery;

        // calcula os maximos valores para todas as questoes:
        this.max_econ = this.max_govt = this.max_dipl = this.max_scty = 0;
        for (var i = 0; i < this.testLength; i++) {
            this.max_econ += Math.abs(this.testQuests[i].outcome.econ);
            this.max_govt += Math.abs(this.testQuests[i].outcome.govt);
            this.max_dipl += Math.abs(this.testQuests[i].outcome.dipl);
            this.max_scty += Math.abs(this.testQuests[i].outcome.scty);
        }
        console.log("this.max_econ = ", this.max_econ);
        console.log("this.max_govt = ", this.max_govt);
        console.log("this.max_dipl = ", this.max_dipl);
        console.log("this.max_scty = ", this.max_scty);

        // inicializa os arrays de soma da pontuacao:
        this.val_econ = new Array(this.testlength);
        this.val_govt = new Array(this.testlength);
        this.val_dipl = new Array(this.testlength);
        this.val_scty = new Array(this.testlength);

        // caso o usuario ja respondeu algumas perguntas anteriormente:
        if (currentQuery > 0) {
            // soma ate onde parou:
            for (let i = 0; i < currentQuery; i++) {
                // identifica para a questao a respectiva escolha do usuario:
                let choice = choices[i];

                // realiza a atualizacao dos rates:
                this.updateRate(i, choice.optn);
            }
        }
    }

    /**
     * .
     *
     */
    nextQuest() {
        if (this.currentQuest < this.testLength) {
            return this.testQuests[this.currentQuest++];
        } else {
            return null;
        }
    }

    /**
     * .
     *
     * @param  {String} idx .
     * @param  {String} option .
     */
    updateRate(idx, option) {
        // identifica a questao e a respectiva escolha do usuario:
        let question = this.testQuests[idx];
        let mult = question.options[option].mult;

        this.val_econ[idx] = mult * question.outcome.econ;
        this.val_govt[idx] = mult * question.outcome.govt;
        this.val_dipl[idx] = mult * question.outcome.dipl;
        this.val_scty[idx] = mult * question.outcome.scty;
    }

    /**
     * .
     *
     * @param  {String} sum .
     * @param  {String} max .
     */
    #calculateRate(sum, max) {
        // evita divisao por zero:
        if (max == 0) {
            return 0;
        } else {
            return ((100 * (max + sum)) / (2 * max)).toFixed(1);
        }
    }

    /**
     * .
     *
     * @param  {String} val .
     */
    #calculateAxis(val) {
        /* 91...100 */ if (val > 90) return 0; // 90
        /* 73... 90 */ if (val >= 73) return 1; // 75
        /* 55... 72 */ if (val >= 55) return 2; // 60
        /* 44... 54 */ if (val >= 44) return 3; // 40
        /* 27... 43 */ if (val >= 27) return 4; // 25
        /* 10... 26 */ if (val >= 10) return 5; //10
        /*  0...  9 */ return 6; // 0
    }

    /**
     * .
     *
     */
    calculateScore() {
        // inicializa estrutura para a pontuacao a ser calculada para as respostas:
        let userScore = {
            name: null,
            side: 0,
            econ: 0,
            govt: 0,
            dipl: 0,
            scty: 0,
        };
        console.log("this.val_econ = ", this.val_econ);
        console.log("this.val_govt = ", this.val_govt);
        console.log("this.val_dipl = ", this.val_dipl);
        console.log("this.val_scty = ", this.val_scty);

        // soma todos os scores dos 4 eixos
        let sum_econ = this.val_econ.reduce((a, b) => a + b, 0);
        let sum_govt = this.val_govt.reduce((a, b) => a + b, 0);
        let sum_dipl = this.val_dipl.reduce((a, b) => a + b, 0);
        let sum_scty = this.val_scty.reduce((a, b) => a + b, 0);
        console.log("sum_econ = ", sum_econ);
        console.log("sum_govt = ", sum_govt);
        console.log("sum_dipl = ", sum_dipl);
        console.log("sum_scty = ", sum_scty);

        // calcula os rates dos eixos:
        userScore.econ = this.#calculateRate(sum_econ, this.max_econ);
        userScore.govt = this.#calculateRate(sum_govt, this.max_govt);
        userScore.dipl = this.#calculateRate(sum_dipl, this.max_dipl);
        userScore.scty = this.#calculateRate(sum_scty, this.max_scty);

        // identifica a ideologia do usuario:
        const axis = this.#calculateAxis(userScore.econ);
        if (axis < 3) {
            userScore.name = "Esquerda";
            userScore.side = 1;
        } else if (userScore.econ == 3) {
            userScore.name = "Centro";
            userScore.side = 0;
        } else {
            userScore.name = "Direita";
            userScore.side = 2;
        }
        console.log("userScore = ", JSON.stringify(userScore));

        return userScore;
    }

    /**
     * .
     *
     * @param  {String} val .
     */
    getLabelEcon(val) {
        const axis = this.#calculateAxis(val);
        return this.testLabels.econ[axis];
    }

    /**
     * .
     *
     * @param  {String} val .
     */
    getLabelGovt(val) {
        const axis = this.#calculateAxis(val);
        return this.testLabels.govt[axis];
    }

    /**
     * .
     *
     * @param  {String} val .
     */
    getLabelDipl(val) {
        const axis = this.#calculateAxis(val);
        return this.testLabels.dipl[axis];
    }

    /**
     * .
     *
     * @param  {String} val .
     */
    getLabelScty(val) {
        const axis = this.#calculateAxis(val);
        return this.testLabels.scty[axis];
    }
}

// Cria instancia global para gerenciar a aplicacao do teste politico:
var GlobalTest = PoliticalTest.loadInstance(dataPoliticalGps);


/* --- DOM HELPER CLASS ---------------------------------------------------- */

/** Classe utilitaria (e unica) para manipulacao do HTML DOM da pagina.
 *  Auxilia na apresentacao do painel central, onde eh realizado o teste,
 *  controla o carrocel, o slider de progresso e qualquer outro componente associado.
 *
 */
class DomHelper {
    // propriedades privadas: atributos do website
    pageTitle;

    // propriedades privadas: componente carrocel
    bs5Carousel;
    innerCarousel;
    prevControl;
    nextControl;

    // propriedades privadas: toasts e popovers
    // propriedades privadas: audios
    audioStart;
    audioRespond;
    audioFinish;

    /* --- INITIALIZATION -------------------------------------------------- */

    /**
     * Inicializacao de nova instancia.
     *
     */
    constructor() {
        // Na carga do site, obtem os atributos da pagina:
        this.pageTitle = document.title;
    }

    /**
     * .
     *
     */
    ready() {
        // inicializa o componente carrocel e identifica seus elementos internos:
        this.bs5Carousel = $("#carouselTest");
        this.innerCarousel = $("#carouselTest .carousel-inner");
        this.prevControl = $("#carouselTest .carousel-control-prev");
        this.nextControl = $("#carouselTest .carousel-control-next");

        // inicializa e identifica as toasts e popovers:
        // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

        // identifica os arquivos de audios:
        this.audioStart = document.querySelector("#audioStart");
        this.audioRespond = document.querySelector("#audioRespond");
        this.audioFinish = document.querySelector("#audioFinish");
    }

    /* --- PAGE/DOCUMENT TITLE --------------------------------------------- */

    /**
     * .
     *
     */
    getTitle() {
        return document.title;
    }

    /**
     * .
     *
     * @param  {String} newTitle .
     */
    setTitle(newTitle) {
        document.title = newTitle;
    }

    /**
     * .
     *
     * @param  {String} note .
     */
    notifyTitle(note) {
        document.title = "(" + note + ") " + this.pageTitle;
    }

    /**
     * .
     *
     */
    resetTitle() {
        document.title = this.pageTitle;
    }

    /* --- WEBSITE RESULT MENU -------------------------------------------- */

    /**
     * .
     *
     */
    showNavResulting() {
        // apresenta as opcoes resultantes:
        $(".finished-test").removeClass("d-none"); // limpa tudo, pq nao sabe qual a cor anterior
    }

    /**
     * .
     *
     */
    hideNavResulting() {
        // inibe as opcoes resultantes:
        $(".finished-test").addClass("d-none");
    }

    /* --- BOOTSTRAP CAROUSEL ---------------------------------------------- */

    /**
     * .
     *
     */
    get lengthSlides() {
        return this.innerCarousel.children().length;
    }

    /**
     * Adiciona o html de um novo slide no carrocel.
     *
     * @param  {String} htmlContent .
     */
    addSlide(htmlContent) {
        // incorpora o slide ao final da sequencia corrente:
        this.innerCarousel.append(htmlContent);
    }

    /**
     * Adiciona o html de um novo slide no carrocel, antes do ultimo elemento.
     *
     * @param  {String} htmlContent .
     */
    addBeforeSlide(htmlContent) {
        // incorpora o slide ao final da sequencia corrente, mas antes do slide introdutorio:
        $(".carousel-inner > .carousel-item:last-child").before(htmlContent);
    }

    /**
     * Adiciona o html de um novo slide no carrocel e avanca para o mesmo.
     *
     * @param  {String} htmlContent .
     */
    nextSlide(htmlContent) {
        // se nao fornecer o html, entao somente ira pular para o proximo slide:
        if (htmlContent) {
            // incorpora o slide ao final da sequencia corrente:
            this.addSlide(htmlContent);
        }

        // se este for o primeiro slide, apenas navega para o mesmo:
        if (this.lengthSlides == 1) {
            // o slide inicial deve ter a class 'active':
            $(".carousel-inner > .carousel-item:first-child").addClass("active");

            // e navega para o primeiro item, simulando um slide-next:
            this.bs5Carousel.carousel(0);
        } else {
            // se houver mais slides, navega para o item adicionado, simulando um slide-next:
            this.bs5Carousel.carousel("next");
        }
    }

    /**
     * .
     *
     * @param  {String} selector .
     */
    getIntroHtml(selector) {
        return selector ? $(selector).html() : null;
    }

    /**
     * Apresenta o slide introdutorio, conforme o cenario onde o usuario se encontra.
     *
     * @param  {String} htmlContent .
     */
    showIntroHtml(htmlContent) {
        // eh preciso eliminar qualquer slide ainda presente no carrocel:
        this.innerCarousel.empty();

        // verifica se o html eh valido:
        if (htmlContent) {
            // O slide introdutorio do teste sera incorporado e apresentado:
            this.addSlide(htmlContent);
        }

        // na apresentacao do slide introdutorio, nao precisa dos controles de navegacao do carrocel:
        this.prevControl.addClass("d-none");
        this.nextControl.addClass("d-none");
    }

    /**
     * Configura o carrocel para responder ao test.
     *
     */
    initCarouselRespond() {
        // apaga os slides anteriores:
        this.innerCarousel.empty();

        // reconfigura o carrocel para percorrer todas as respostas:
        this.bs5Carousel.carousel("pause");

        // inibe os controles de navegacao (prev, next):
        this.prevControl.addClass("d-none");
        this.nextControl.addClass("d-none");
    }

    /**
     * Configura o carrocel para visualizacao das respostas.
     *
     */
    initCarouselReview() {
        // habilita os controles de navegacao (prev, next):
        this.prevControl.removeClass("d-none");
        this.nextControl.removeClass("d-none");
    }

    /* --- TOASTS AND POPUPS ----------------------------------------------- */

    /**
     * Exibe a toast com o alerta de que ainda estamos em obras.
     *
     */
    toastObras() {
        // identifica a div da toast:
        const toastUnderConstruction = document.getElementById("toastUnderConstruction");
        const bsToast = new bootstrap.Toast(toastUnderConstruction);
        bsToast.show();
    }

    /* --- AUDIOS: PLAY SOUND ---------------------------------------------- */

    /**
     * .
     *
     */
    playStart() {
        // apenas emite o som se estiver configurado para tal:
        if (GlobalUser.isSoundOn) {
            this.audioStart.play();
        }
    }

    /**
     * .
     *
     */
    playRespond() {
        // apenas emite o som se estiver configurado para tal:
        if (GlobalUser.isSoundOn) {
            this.audioRespond.play();
        }
    }

    /**
     * .
     *
     */
    playFinish() {
        // apenas emite o som se estiver configurado para tal:
        if (GlobalUser.isSoundOn) {
            this.audioFinish.play();
        }
    }
}

// Instancia helper para manipulacao do DOM (HTML Document Object Model) da pagina:
var DOM = new DomHelper();

/* --- MODAL APP SETUP ----------------------------------------------------- */

/**
 * .
 */
class ModalSetup {
    // propriedades privadas: rotulos dos componentes da modal setup
    textThemeColor;
    textFontSize;
    textSoundAlert;
    textUserHistory;

    /* --- INITIALIZATION -------------------------------------------------- */

    /**
     * Inicializacao de nova instancia.
     *
     */
    constructor() {
        //
    }

    /**
     * Inicializacao dos componentes jQuery.
     *
     */
    ready() {
        // efetua bind dos eventos para a modal de setup:
        $("#modalSetup").on("show.bs.modal", { self: this }, this.onShow);

        // eventos para tratamento das alteracoes das preferencias:
        $("#switchThemeColor").change({ self: this }, this.switchThemeColor_onChange);
        $("#rangeFontSize").change({ self: this }, this.rangeFontSize_onChange);
        $("#switchSoundAlert").change({ self: this }, this.switchSoundAlert_onChange);
        $("#clearUserHistory").click({ self: this }, this.clearUserHistory_onClick);

        // obtem os templates para os rotulos a partir do proprio html.
        this.textThemeColor = $("#labelThemeColor").text();
        this.textFontSize = $("#labelFontSize").text();
        this.textSoundAlert = $("#labelSoundAlert").text();
        this.textUserHistory = $("#labelUserHistory").text();
    }

    /**
     * Rotulo para a preferencia Esquema de Cores.
     *
     */
    get tagThemeColor() {
        return GlobalUser.prefThemeColor == "dark" ? "Escuro" : "Claro";
    }

    /**
     * Rotulo para a preferencia Esquema de Cores.
     *
     */
    get tagFontSize() {
        switch (GlobalUser.prefFontSize) {
            case "small": // 1 = small
                return "Pequena";
            case "normal": // 2 = normal
                return "Normal";
            case "large": // 3 = large
                return "Grande";
            case "huge": // 4 = huge
                return "Maior";
        }
    }

    /**
     * Rotulo para a preferencia Esquema de Cores.
     *
     */
    get tagSoundAlert() {
        return GlobalUser.prefSoundAlert == "on" ? "Ligado" : "Desligado";
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    onRefresh(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // atualiza o label dos componentes baseando em seus valores atuais:
        let label = self.textThemeColor.replace("{0}", self.tagThemeColor);
        $("#labelThemeColor").text(label);

        label = self.textFontSize.replace("{0}", self.tagFontSize);
        $("#labelFontSize").text(label);

        label = self.textSoundAlert.replace("{0}", self.tagSoundAlert);
        $("#labelSoundAlert").text(label);

        label = self.textUserHistory.replace("{0}", GlobalUser.testLength);
        $("#labelUserHistory").text(label);
        $("#clearUserHistory").prop("disabled", GlobalUser.testLength == 0);
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    onShow(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // atualiza os valores atuais das preferencias nos rotulos:
        self.onRefresh(event);

        // estado inicial das preferencias do usuario:
        $("#switchThemeColor").attr("checked", GlobalUser.isThemeDark);
        $("#rangeFontSize").val(GlobalUser.ordFontSize);
        $("#switchSoundAlert").attr("checked", GlobalUser.isSoundOn);

        // se o usuario ainda nao respondeu o teste, desabilita o botao:
        $("#clearUserHistory").prop("disabled", GlobalUser.testLength == 0);
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    switchThemeColor_onChange(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no website:
        GlobalUser.isThemeDark = this.checked;

        // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
        self.onRefresh(event);
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    rangeFontSize_onChange(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no website:
        GlobalUser.ordFontSize = this.value;

        // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
        self.onRefresh(event);
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    switchSoundAlert_onChange(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no website:
        GlobalUser.isSoundOn = this.checked;

        // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
        self.onRefresh(event);
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    clearUserHistory_onClick(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // para evitar enganos, pede a confirmacao do usuario:
        let isOk = confirm("Por favor, confirme a exclusão do seu registro de respostas para o teste do GPS Político:");
        if (isOk) {
            // limpa todos os dados do teste do usuario:
            GlobalUser.clear();

            // apos apagar o historico, limpa o valor de questoes respondidas no rotulo:
            self.onRefresh(event);

            // eh preciso atualizar o slide introdutorio, pq o usuario tem novo estado:
            showIntro();
        }
    }
}

// Cria instancia global para controle da modal de preferencias:
var GlobalSetup = new ModalSetup();

/* --- MODAL RESULTADO ----------------------------------------------------- */

/**
 * .
 * 
 */
class ModalResult {
    // propriedades privadas: pontuacao do usuario nos eixos
    equality;
    market;
    liberty;
    authority;
    global;
    national;
    progress;
    tradition;

    // propriedades privadas: rotulos para os eixos
    label_econ;
    label_govt;
    label_dipl;
    label_scty;

    /* --- INITIALIZATION -------------------------------------------------- */

    /**
     * Inicializacao de nova instancia.
     *
     */
    constructor() {
        //
    }

    /**
     * Inicializacao dos componentes jQuery.
     *
     */
    ready() {
        // efetua bind dos eventos para a modal de resultado:
        $("#modalResult").on("show.bs.modal", { self: this }, this.onShow);
        $("#modalResult").on("hide.bs.modal", { self: this }, this.onHide);

        // vai exibir tooltip do tipo popover ao copiar para area de transferencia.
        $(".btn-popover").popover({
            delay: { show: 500, hide: 100 },
        });
    }

    /**
     * .
     *
     */
    show() {
        $("#modalResult").modal("show");
    }

    /**
     * .
     *
     * @param  {String} name .
     * @param  {String} value .
     */
    #setBarValue(name, value) {
        let bar = document.getElementById("bar-" + name);
        bar.style.width = value + "%";

        let rate = document.getElementById("rate-" + name);
        rate.innerHTML = value + "%";

        // se o valor for abaixo de 12%, nao vai caber:
        if (value < 12) {
            rate.style.visibility = "hidden";
        }
    }

    /**
     * .
     *
     * @param  {String} element .
     */
    #dataEmoji(element) {
        return $(element).attr("data-emoji");
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    onShow(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // atualiza os valores dos rotulos dos eixos conforme score do usuario:
        self.equality = GlobalUser.testScore.econ;
        self.market = (100 - self.equality).toFixed(1);
        self.liberty = GlobalUser.testScore.govt;
        self.authority = (100 - self.liberty).toFixed(1);
        self.global = GlobalUser.testScore.dipl;
        self.national = (100 - self.global).toFixed(1);
        self.progress = GlobalUser.testScore.scty;
        self.tradition = (100 - self.progress).toFixed(1);

        // obtem os rotulos para os eixos:
        self.label_econ = GlobalTest.getLabelEcon(GlobalUser.testScore.econ);
        self.label_govt = GlobalTest.getLabelGovt(GlobalUser.testScore.govt);
        self.label_dipl = GlobalTest.getLabelDipl(GlobalUser.testScore.dipl);
        self.label_scty = GlobalTest.getLabelScty(GlobalUser.testScore.scty);

        // aplica os valores a modal:
        self.#setBarValue("equality", self.equality);
        self.#setBarValue("market", self.market);
        self.#setBarValue("liberty", self.liberty);
        self.#setBarValue("authority", self.authority);
        self.#setBarValue("global", self.global);
        self.#setBarValue("national", self.national);
        self.#setBarValue("progress", self.progress);
        self.#setBarValue("tradition", self.tradition);

        // obtem os rotulos para os eixos:
        $("#economy-label").html(self.label_econ);
        $("#govern-label").html(self.label_govt);
        $("#diplomacy-label").html(self.label_dipl);
        $("#society-label").html(self.label_scty);

        // informa a ideologia de esquerda do usuario:
        if (GlobalUser.testScore.side == 1) {
            // apresenta apenas o alerta da esquerda:
            $("#alert-left").removeClass("d-none");
            $("#alert-center").addClass("d-none");
            $("#alert-right").addClass("d-none");
            // informa a ideologia do usuario:
            // $("#label-left").text(GlobalUser.testScore.name);
        }
        // informa a ideologia de centro do usuario:
        else if (GlobalUser.testScore.side == 0) {
            // apresenta apenas o alerta da direita:
            $("#alert-left").addClass("d-none");
            $("#alert-center").removeClass("d-none");
            $("#alert-right").addClass("d-none");
            // informa a ideologia do usuario:
            // $("#label-center").text(GlobalUser.testScore.name);
        }
        // informa a ideologia de direita do usuario:
        else {
            // apresenta apenas o alerta da direita:
            $("#alert-left").addClass("d-none");
            $("#alert-center").addClass("d-none");
            $("#alert-right").removeClass("d-none");
            // informa a ideologia do usuario:
            // $("#label-right").text(GlobalUser.testScore.name);
        }

        // obtem os emojis para elaborar o texto para o clipboard:
        let siteTitle = self.#dataEmoji(".btn-clipboard");
        let hashIdeal = GlobalUser.testScore.name.hashtag();
        let line1 = self.equality >= self.market ? self.#dataEmoji("#bar-equality") : self.#dataEmoji("#bar-market");
        let line2 = self.liberty >= self.authority ? self.#dataEmoji("#bar-liberty") : self.#dataEmoji("#bar-authority");
        let line3 = self.global >= self.national ? self.#dataEmoji("#bar-global") : self.#dataEmoji("#bar-national");
        let line4 = self.progress >= self.tradition ? self.#dataEmoji("#bar-progress") : self.#dataEmoji("#bar-tradition");

        // cria o texto final com os rotulos da pontuacao:
        const clip = `${siteTitle}  ${hashIdeal}\n\n${line1} ${self.label_econ}\n${line2} ${self.label_govt}\n${line3} ${self.label_dipl}\n${line4} ${self.label_scty}\n`;
        $(".btn-clipboard").attr("data-clipboard-text", clip);

        // inicializa componente para manipulacao do clipboard:
        window.clipboard = new ClipboardJS(".btn-clipboard", {
            container: document.getElementById("modalResult"),
        });
        // ao efetuar a copia, exibe mensagem informando o usuario:
        clipboard.on("success", function (e) {
            $("#btnShare").popover("show");
            // evita que o usuario aperte o botao novamente na sequencia.
            $("#btnShare").prop("disabled", true);

            setTimeout(function () {
                $("#btnShare").popover("hide");
                $("#btnShare").prop("disabled", false);
            }, 3333);
        });
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    onHide(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // managing the lifecycle of the DOM:
        window.clipboard.destroy();
    }
}

// Cria instancia global para controle da modal de preferencias:
var GlobalResult = new ModalResult();

/* --- CURRENT QUIZ -------------------------------------------------------- */

/**
 * A partir do estado do usuario, identifica qual painel introdutorio apresentar.
 * 
 */
function showIntro() {
    // identifica o cenario de uso para definir qual painel introdutorio apresentar:
    if (GlobalUser.testVersion == 0 || GlobalUser.testLength == 0) {
        // $CENARIO:BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU O TESTE BASICO
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideNavResulting();
        // informa ao usuario o numero de questoes do teste basico:
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerStart");
        htmlContent = htmlContent.formats(GlobalTest.testLength);
        // apresenta opcoes [Iniciar Teste Basico] [Como Funciona]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion == GlobalTest.testVersion && GlobalUser.testLength < GlobalTest.testLength) {
        // $CENARIO:BEGINNER-RESUME: USUARIO INICIOU VERSAO BASICA DO TESTE MAS NAO FINALIZOU
        let testDif = GlobalTest.testLength - GlobalUser.testLength;
        let plusQueries = testDif == 1 ? "falta 1 questão a ser respondida" : `faltam ${testDif} questões a serem respondidas`;
        // altera o titulo do site para alertar sobre as questoes pendentes:
        DOM.notifyTitle("#" + GlobalUser.testLength + "..." + GlobalTest.testLength);
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideNavResulting();
        // exibe notificacao de questoes pendentes com valor: # user.testTotalBasic ... pgps.testBasicLength
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerResume");
        htmlContent = htmlContent.formats(GlobalTest.testLength, GlobalUser.testLength, plusQueries);
        // apresenta opcoes [Retomar Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion == GlobalTest.testVersion && GlobalUser.testLength == GlobalTest.testLength) {
        // $CENARIO:MAJOR-RESTART: USUARIO ACABOU DE FINALIZAR VERSAO BASICA DO TESTE
        let imgPlane = `<img src="images/score/${GlobalUser.testScore.side}.png" class="img-inline" alt="Resultado do Teste" draggable="false" />`;
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showNavResulting();
        // exibe o espectro resultante da pontuacao no slide intro:
        let htmlContent = DOM.getIntroHtml("#cenarioMajorRestart");
        htmlContent = htmlContent.formats(imgPlane);
        // apresenta opcoes[Refazer Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion < GlobalTest.testVersion && GlobalUser.testLength == GlobalTest.testLength) {
        // $CENARIO:MAJOR-UPGRADE: USUARIO EH NOTIFICADO DE ALTERACOES NAS QUESTOES DO TESTE
        // altera o titulo do site para alertar sobre alteracoes nas questoes: (*) EXISTO.me • GPS Politico
        DOM.notifyTitle("*");
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showNavResulting();
        // exibe notificacao de alteracao na versao do teste: + pgps.testVersion
        let htmlContent = DOM.getIntroHtml("#cenarioMajorUpgrade");
        htmlContent = htmlContent.formats(GlobalTest.testVersion.toFixed(2), GlobalUser.testVersion.toFixed(2));
        // apresenta opcoes[Refazer Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion < GlobalTest.testVersion && GlobalUser.testLength < GlobalTest.testLength) {
        // $CENARIO:MAJOR-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        let testDif = GlobalTest.testLength - GlobalUser.testLength;
        let plusQueries = testDif == 1 ? "1 nova questão adicionada" : `${testDif} novas questões adicionadas`;
        // altera o titulo do site para alertar sobre novas questoes: (pgps.testExtraLength) EXISTO.me • GPS Politico
        DOM.notifyTitle("+" + plusQueries);
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showNavResulting();
        // exibe notificacao de novas questoes com valor: + pgps.testExtraLength
        let htmlContent = DOM.getIntroHtml("#cenarioMajorNotify");
        htmlContent = htmlContent.formats(GlobalTest.testVersion.toFixed(2), GlobalUser.testVersion.toFixed(2), plusQueries);
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else {
        // $CENARIO:MAJOR-RESET: DADOS DO USUARIO INCONSISTENTES OU REFORMULACAO GERAL DO TESTE
        // reinicializa a estrutura de dados do usuario para reiniciar o teste:
        GlobalUser = AppUser.resetInstance();

        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideNavResulting();
        // informa ao usuario o numero de questoes do teste basico:
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerStart");
        htmlContent = htmlContent.formats(GlobalTest.testLength);
        // apresenta opcoes [Iniciar Teste Basico] [Como Funciona]
        DOM.showIntroHtml(htmlContent);
    }
}

/**
 * .
 *
 */
function slideNextQuest() {
    // $CENARIO:BEGINNER-TEST: obtem 1ª questao do teste
    const question = GlobalTest.nextQuest();
    console.log("slideNextQuest: ", question);

    // se ainda ha questoes a serem respondidas:
    if (question != null) {
        const option0 = question.options[0];
        const option1 = question.options[1];
        // prepara template de div para carrocel com dados da questao
        let htmlContent = DOM.getIntroHtml("#templateRespondQuestion");
        htmlContent = htmlContent.formats(GlobalTest.testLength, GlobalTest.currentQuest, question.subject, option0.text, option1.text);
        // adiciona div como slide no carrocel e desloca para a questao
        DOM.nextSlide(htmlContent);
        // informa que processou proxima questao:
        return true;
    } else {
        // informa que nao ha mais questoes (todas ja foram respondidas)
        return false;
    }
}

/**
 * .
 * 
 */
function takeTest() {
    console.log(`takeTest()`);
    // registra o inicio do teste: user.quizDateStart, user.quizFlagOpen
    GlobalUser.startQuiz(GlobalTest.testVersion);

    // inicializa teste com questoes de pgps.quizListBasicQueries
    GlobalTest.initQuiz(GlobalUser.testLength, GlobalUser.testChoices);

    // desabilita a navegacao do carrocel com mouse ou teclado
    DOM.initCarouselRespond();

    // emite alerta sonoro quando o usuario inicia o teste:
    DOM.playStart();

    // exibe a primeira questao do teste:
    slideNextQuest();
}

/**
 * .
 *
 * @param  {String} idQuest Numero da questao corrente.
 * @param  {String} option Sequencia da opcao (options item) escolhida: 0 ou 1.
 */
function respondTest(idQuest, option) {
    // emite alerta sonoro quando o usuario escolhe uma opcao:
    DOM.playRespond();

    // coleta resposta do usuario -> quizUserOpts e quizTotalDone++
    let idx = idQuest - 1;
    GlobalTest.updateRate(idx, option); // 0 index
    let choice = {
        // registra o numero da questao porque pode ficar aleatorio no futuro.
        item: idQuest,
        optn: option
    };
    GlobalUser.addChoice(choice); // tem q converter p/ objeto
    //console.log(`respondTest(${idQuest}, ${item}, ${rate}, ${side})`);

    // se ainda ha questoes a serem respondidas
    let hasNext = slideNextQuest();
    console.log("hasNext = ", hasNext);

    // verifica se acabou as questoes:
    if (!hasNext) {
        // calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        let testScore = GlobalTest.calculateScore();

        // registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        GlobalUser.stopQuiz(testScore);

        // aproveita para avancar para o proximo cenario:
        showIntro();

        // ao final, exibe o resultado do teste para o usuario:
        GlobalResult.show();

        // emite alerta sonoro quando o usuario finaliza o teste:
        DOM.playFinish();
    }
}

/**
 * .
 * 
 */
function reviewTest() {
    // inicializa teste com questoes de pgps.quizListBasicQueries
    GlobalTest.initQuiz(0, []);

    // somente adiciona as questoes se os slides das questoes ainda nao foram adicionados:
    if (DOM.lengthSlides <= 1) {
        // $CENARIO:BEGINNER-REVIEW
        let idQuestion = 0;
        // loop de todas as questoes do teste: question <- pgps.quizListBasicQueries
        for (let question = GlobalTest.nextQuest(); idQuestion < GlobalUser.testLength && question != null; question = GlobalTest.nextQuest()) {
            console.log(`reviewTest(): `, question);

            // obtem o texto das opcoes:
            const option0Text = question.options[0].text;
            const option1Text = question.options[1].text;

            // identifica para a questao selecionada a resposta do usuario:
            const userChoice = GlobalUser.testChoices[idQuestion++];
            const option0Checked = userChoice.optn == 0 ? "checked" : "disabled";
            const option1Checked = userChoice.optn == 1 ? "checked" : "disabled";

            // prepara template (read-only) de div para carrocel com dados da questao
            let htmlContent = DOM.getIntroHtml("#templateReviewQuestion");
            htmlContent = htmlContent.formats(GlobalTest.testLength, idQuestion, question.subject, option0Text, option0Checked, option1Text, option1Checked);

            // adiciona div como slide no carrocel
            DOM.addBeforeSlide(htmlContent);
        }
        // habilita navegacao do carrocel com mouse ou teclado
        DOM.initCarouselReview();
    }

    // emite alerta sonoro quando o usuario inicia a revisao do teste:
    DOM.playStart();

    // desloca para a primeira questao, que eh o proximo slide:
    DOM.nextSlide();
}

/**
 * .
 * 
 */
function retakeTest() {
    // limpa as respostas anteriores do usuario
    GlobalUser.clear();

    // como limpou o estado do usuario, reseta a aparencia do cabecalho:
    DOM.hideNavResulting();

    // inicializa teste:
    takeTest();
}

/**
 * .
 * 
 */
function forgetMe() {
    // Questiona o usuario antes de apagar seus dados:
    let isOk = confirm("Deseja excluir seu histórico do teste e todas as preferências configuradas? Você será redirecionado para fora deste website se confirmar…");
    if (isOk) {
        // exclui o registro do usuario e qualquer outra informacao no local-storage:
        GlobalStore.clear();
        console.log("Excluídos todos os dados no Storage com sucesso.");

        // recomenda a pagina da iniciativa no github.
        window.location.replace("https://www.github.com/united-sapiens");
    }
}


/* --- JQUERY: DOM READY --------------------------------------------------- */

/**
 * Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
 *
 */
$(document).ready(function () {
    ("use strict"); // sempre!

    // Efetua inicializacao das referencias internas do DOM.
    DOM.ready();
    GlobalSetup.ready();
    GlobalResult.ready();

    // a partir do estado do usuario, identifica qual painel introdutorio apresentar:
    showIntro();

    // Se for o primeiro acesso do usuario:
    if (GlobalUser.isFirstTime) {
        // exibe a popup com o alerta de que ainda estamos em obras,
        DOM.toastObras();

        // ja nao eh mais o primeiro acesso a partir daqui...
        GlobalUser.isFirstTime = false;
    }
});


/* --- ENVIRONMENT --------------------------------------------------------- */

// O que acontece em DEV, fica em DEV...
if (GlobalEnv.production) {
    // PROD:
    //
    /* --- Website PWA - Progressive Web Application ----------------------- */
    //
    // Check compatibility for the browser we're running this in:
    if ("serviceWorker" in navigator && !navigator.serviceWorker.controller) {
        // Register the service worker:
        navigator.serviceWorker
            .register("/sw.js", { scope: "/" })
            .then((reg) => console.info("[PWA] Service worker has been registered:", reg))
            .catch((err) => console.error("[PWA] Service worker registration failed:", err));
    }
} else {
    // DEV:
    // reduz o numero de questoes para facilitar depuracao:
    if (!GlobalEnv.production) GlobalTest.testLength = 5;
}
