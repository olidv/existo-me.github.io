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
    ready() {}

    /**
     * .
     *
     */
    show() {
        $("#modalResult").modal("show");
    }
}

// Cria instancia global para controle da modal de preferencias:
var GlobalResult = new ModalResult();
