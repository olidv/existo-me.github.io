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
    quizCssColor = null; // coloracao correspondente a pontuacao obtida
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
            // TODO: Poderia repassar objStorage no constructor, para associar la...
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
