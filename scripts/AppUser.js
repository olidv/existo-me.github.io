/* --- USER CLASS ------------------------------------------------------------------ */

/** Classe para armazenamento de informacoes e configuracoes do usuario. */
class AppUser {
    // propriedades publicas: informacoes gerais
    name = null; // nome do usuario para emissao de certificado

    // propriedades publicas: resultado do teste
    testVersion = 0.0; // numero da versao do teste respondido
    testDateStart = null; // data em que iniciou o teste
    testFlagOpen = false; // indica se o teste esta em andamento agora
    testTotalDone = 0; // numero de questoes do teste respondidas ate o momento
    testUserOpts = []; // respostas para as questoes respondidas
    testDateFinal = null; // data em que finalizou o teste
    testUserScore = 0.0; // pontuacao calculada para as respostas
    testCssColor = null; // coloracao correspondente a pontuacao obtida
    testFileImage = null; // id do plano (figura) para a pontuacao obtida

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {String} beginVersion Versao do teste para o caso do usuario ser iniciante.
     */
    constructor(beginVersion) {
        this.testVersion = beginVersion;
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

    /**
     * .
     */
    startQuiz() {
        // inicializa propriedades para sinalizar o inicio do teste politico:
        this.testDateStart = new Date();
        this.testFlagOpen = true; // teste em andamento
    }

    /**
     * .
     */
    addResponse(item, rate, side) {
        // deixa registrados todos os valores, para calcular a pontuacao posteriormente:
        const option = {
            item: item,
            rate: rate,
            side: side,
        };

        // adiciona mais uma resposta do usuario:
        this.testTotalDone++;
        this.testUserOpts.push(option);
    }

    /**
     * .
     */
    stopQuiz() {
        // inicializa propriedades para sinalizar o encerramento do teste politico:
        this.testDateFinal = new Date();
        this.testFlagOpen = false; // teste finalizado
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
        this.testDateStart = null;
        this.testFlagOpen = false;
        this.testTotalDone = 0;
        this.testUserOpts = [];
        this.testDateFinal = null;
        this.testUserScore = 0.0;
        this.testCssColor = null;
        this.testFileImage = null;

        // ...e tambem limpa o local-storage:
        this.save();
        console.info("Instancia corrente de AppUser reinicializada e atualizada no Storage com sucesso.");
    }
}

// Cria instancia global para gerenciar o uso do web site pelo usuario:
//GlobalStore.clear();  // reset do local-storage
var GlobalUser = AppUser.loadInstance(0);  // considera um beginner, caso seja o primeiro acesso do usuario
