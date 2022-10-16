/* --- USER CLASS ------------------------------------------------------------------ */

/** Classe para armazenamento de informacoes e configuracoes do usuario. */
class AppUser {
    // propriedades publicas: informacoes gerais
    name = null; // nome do usuario para emissao de certificado

    // propriedades publicas: resultado do teste
    quizVersion = 0.0; // numero da versao do teste respondido
    quizDateStart = null; // data em que iniciou o teste
    quizFlagOpen = false; // indica se o teste esta em andamento agora
    quizTotalBasic = 60; // numero de questoes do teste basico respondidas ate o momento
    quizTotalExtra = 0; // numero de questoes do teste extra respondidas ate o momento
    quizUserOpts = []; // respostas para as questoes respondidas
    quizDateFinal = null; // data em que finalizou o teste
    quizUserScore = 0.0; // pontuacao calculada para as respostas
    quizCssColor = null; // coloracao correspondente a pontuacao obtida
    quizFileImage = null; // id do plano (figura) para a pontuacao obtida

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {String} beginVersion Versao do teste para o caso do usuario ser iniciante.
     */
    constructor(beginVersion) {
        this.quizVersion = beginVersion;
    }

    /** Getter: numero total de questoes respondidas ate o momento. */
    get quizTotalDone() {
        return this.quizTotalBasic + this.quizTotalExtra;
    }

    /** Getter: numero total de questoes respondidas ate o momento. */
    get isQuizDone() {
        return this.quizTotalDone > 0;
    }

    /**
     * Salva esta instancia do AppUser no local-storage.
     */
    save() {
        GlobalStore.set(AppUser.name, this);
        console.table("Instancia corrente de AppUser armazenada no Storage com sucesso: ", this);
    }

    /**
     * Limpa o historico do teste.
     */
    clear() {
        // apaga as respostas do usuario...
        this.quizDateStart = null;
        this.quizFlagOpen = false;
        this.quizTotalBasic = 0;
        this.quizTotalExtra = 0;
        this.quizUserOpts = [];
        this.quizDateFinal = null;
        this.quizUserScore = 0.0;
        this.quizCssColor = null;
        this.quizFileImage = null;

        // ...e tambem limpa o local-storage:
        this.save();
        console.info("Instancia corrente de AppUser reinicializada e atualizada no Storage com sucesso.");
    }

    /**
     * Carrega os dados anteriores da ultima sessao do usuario a partir do local-storage.
     *
     * @param  {String} beginVersion Versao do teste para o caso do usuario ser iniciante.
     */
    static loadInstance(beginVersion) {
        let newInstance = new AppUser(beginVersion);

        // se ja estiver salvo no local-storage, recupera as propriedades:
        if (GlobalStore.exist(AppUser.name)) {
            let objStorage = GlobalStore.get(AppUser.name);
            // transfere os valores para uma nova instancia de AppUser:
            newInstance = Object.assign(newInstance, objStorage);

            // salva novamente, para o caso de se ter criado novas propriedades na classe:
            newInstance.save();
            console.info("Valores de AppUser recuperados e atualizados no Storage com sucesso.");
        } else {
            // como ainda nao existia no storage, salva para proximas sessoes:
            newInstance.save();
            console.info("Nova instancia de AppUser criada e armazenada no Storage com sucesso.");
        }

        return newInstance;
    }
}

// Cria instancia global para gerenciar o uso do web site pelo usuario:
//GlobalStore.clear();  // reset do local-storage
var GlobalUser = AppUser.loadInstance(1.0);
