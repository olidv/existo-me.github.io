/* --- USER CLASS ------------------------------------------------------------------ */

/** Classe para armazenamento de informacoes e configuracoes do usuario. */
class AppUser {
    // propriedades publicas: informacoes gerais
    name = null; // nome do usuario para emissao de certificado

    // propriedades publicas: resultado do teste
    quizVersion = 0.0; // numero da versao do teste respondido
    quizDateStart = null; // data em que iniciou o teste
    quizFlagOpen = false; // indica se o teste esta em andamento agora
    quizTotalBasic = 0; // numero de questoes do teste basico respondidas ate o momento
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

    /**
     * Salva esta instancia do AppUser no local-storage.
     */
    save() {
        $.localStorage.set(LOCAL_STORAGE_ID, this);
        console.table("Instancia corrente de AppUser armazenada no LocalStorage: ", this);
    }

    /**
     * Identificacao utilizada para armazenar instancias no local-storage.
     */
    static get LOCAL_STORAGE_ID() {
        return "AppUser";
    }

    /**
     * Carrega os dados anteriores da ultima sessao do usuario a partir do local-storage.
     *
     * @param  {String} beginVersion Versao do teste para o caso do usuario ser iniciante.
     */
    loadInstance(beginVersion) {
        let newInstance = new AppUser(beginVersion);

        // se ja estivder salvo no local-storage, recupera as propriedades:
        if ($.localStorage.isSet(LOCAL_STORAGE_ID)) {
            let objStorage = $.localStorage.get(LOCAL_STORAGE_ID);
            // transfere os valores para uma nova instancia de AppUser...
            newInstance = Object.assign(newInstance, objStorage);
            console.table("Valores de AppUser recuperados do LocalStorage: ", newInstance);
        } else {
            $.localStorage.set(LOCAL_STORAGE_ID, newInstance);
            console.table("Nova instancia de AppUser criada e armazenada no LocalStorage: ", newInstance);
        }

        return newInstance;
    }
}

// Cria instancia global para gerenciar o uso do web site pelo usuario:
//$.localStorage.removeAll();  // reset do local-storage
var GlobalUser = AppUser.loadInstance();
