/* --- MODAL APP SETUP ------------------------------------------------------------------ */

/**
 * .
 */
class ModalSetup {
    // propriedades privadas: rotulos dos componentes da modal setup
    textThemeColor;
    textFontSize;
    textSoundAlert;
    textUserHistory;

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        //
    }

    /**
     * Inicializacao dos componentes jQuery.
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

    /** Rotulo para a preferencia Esquema de Cores. */
    /**
     * .
     */
    get tagThemeColor() {
        return GlobalUser.prefThemeColor == "dark" ? "Escuro" : "Claro";
    }

    /** Rotulo para a preferencia Esquema de Cores. */
    /**
     * .
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

    /** Rotulo para a preferencia Esquema de Cores. */
    /**
     * .
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

        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
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

        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
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

        // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
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
        let isOk = confirm("Por favor, confirme a exclusão do seu histórico de respostas para o teste do GPS Político:");
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


/* --- MODAL RESULTADO ------------------------------------------------------------------ */

/**
 * .
 */
class ModalResult {
    // propriedades privadas: componentes da modal result
    clipboard;
    
    // propriedades privadas: pontuacao do usuario nos eixos
    equality;
    market;
    global;
    national;
    liberty;
    authority;
    progress;
    tradition;

    // propriedades privadas: rotulos para os eixos
    label_econ;
    label_dipl;
    label_govt;
    label_scty;

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        //
    }

    /**
     * Inicializacao dos componentes jQuery.
     */
    ready() {
        // efetua bind dos eventos para a modal de resultado:
        $("#modalResult").on("show.bs.modal", { self: this }, this.onShow);
        //$("#btnShare").click({ self: this }, this.btnShare_onClick);
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
     * @param  {Object} event .
     */
    onShow(event) {
        // obtem a instancia da classe modal:
        let self = event.data.self;

        // atualiza os valores dos rotulos dos eixos conforme score do usuario:
        self.equality = GlobalUser.testScore.econ;
        self.market = (100 - self.equality).toFixed(1);
        self.global = GlobalUser.testScore.dipl;
        self.national = (100 - self.global).toFixed(1);
        self.liberty = GlobalUser.testScore.govt;
        self.authority = (100 - self.liberty).toFixed(1);
        self.progress = GlobalUser.testScore.scty;
        self.tradition = (100 - self.progress).toFixed(1);

        // obtem os rotulos para os eixos:
        self.label_econ = GlobalTest.getLabelEcon(GlobalUser.testScore.econ);
        self.label_dipl = GlobalTest.getLabelDipl(GlobalUser.testScore.dipl);
        self.label_govt = GlobalTest.getLabelGovt(GlobalUser.testScore.govt);
        self.label_scty = GlobalTest.getLabelScty(GlobalUser.testScore.scty);

        // aplica os valores a modal:
        self.#setBarValue("equality", self.equality);
        self.#setBarValue("market", self.market);
        self.#setBarValue("national", self.national);
        self.#setBarValue("global", self.global);
        self.#setBarValue("liberty", self.liberty);
        self.#setBarValue("authority", self.authority);
        self.#setBarValue("tradition", self.tradition);
        self.#setBarValue("progress", self.progress);

        // obtem os rotulos para os eixos:
        $("#economic-label").html(self.label_econ);
        $("#diplomatic-label").html(self.label_dipl);
        $("#state-label").html(self.label_govt);
        $("#society-label").html(self.label_scty);

        // informa a ideologia de esquerda do usuario:
        if (GlobalUser.testScore.side == 1) {
            // apresenta apenas o alerta da esquerda:
            $("#alert-left").removeClass("d-none");
            $("#alert-right").addClass("d-none");
            // informa a ideologia do usuario:
            $("#label-left").text(GlobalUser.testScore.name);
        }
        // informa a ideologia de direita do usuario:
        else {
            // apresenta apenas o alerta da direita:
            $("#alert-left").removeClass("d-none");
            $("#alert-right").addClass("d-none");
            // informa a ideologia do usuario:
            $("#label-right").text(GlobalUser.testScore.name);
        }

        // elabora o texto para o clipboard:
        let clip = $("#alert-left").data("emoji");
        console.log("data = ", clip);
    }

    /**
     * .
     *
     * @param  {Object} event .
     */
    // btnShare_onClick(event) {
    //     // obtem a instancia da classe modal:
    //     let self = event.data.self;

    //     //

    // }
}

// Cria instancia global para controle da modal de preferencias:
var GlobalResult = new ModalResult();
