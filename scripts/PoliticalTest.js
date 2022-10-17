/* --- POLITICAL GPS TEST CLASS ------------------------------------------------------------------ */

/** Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas. */
/**
 * .
 *
 */
class PoliticalTest {
    // propriedades publicas:
    testDateVersion = null; // data da liberacao desta versao do teste

    testBasicVersion = 0.0; // numero da versao basica do teste
    testBasicLength = 0; // numero total de questoes do teste basico
    testBasicQueries = []; // lista de questoes basicas a serem respondidas

    testExtraVersion = 0.0; // numero da versao extra do teste
    testExtraLength = 0; // numero total de questoes do teste estra
    testExtraQueries = []; // lista de questoes extras a serem respondidas

    // propriedades privadas: controle do generator de quetoes:
    quizCurrentQuery = 0; // numero da questao corrente do teste em andamento
    quizLengthQueries = 0; // tamanho da lista de questoes do teste em andamento
    quizTotalQueries = 0; // numero total de questoes do teste em andamento
    quizListQueries = []; // lista de questoes para o teste em andamento

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // ??? a versao pode ser utilizada na notificacao de novas questoes?
        this.testDateVersion = new Date();
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
        console.table("Nova instancia de PoliticalTest criada com sucesso: ", newInstance);

        return newInstance;
    }

    /**
     * TODO: pode ser que um atributo com a ultima versao seja melhor para as notificacoes.
     */
    get testLastVersion() {
        return (this.testExtraVersion) ? this.testExtraVersion : this.testBasicVersion;
    }

    /**
     * .
     */
    get testAllLength() {
        return this.testBasicLength + this.testExtraLength;
    }

    /**
     * .
     */
    get testAllQueries() {
        return [...this.testBasicQueries, ...this.testExtraQueries];
    }

    /**
     * .
     *
     * @param  {String} stage .
     * @param  {Number} currentQuery .
     */
    initQuiz(stage, currentQuery) {
        switch (stage) {
            case "basic":
                this.quizCurrentQuery = currentQuery;
                this.quizLengthQueries = this.testBasicLength;
                this.quizListQueries = this.testBasicQueries;
                this.quizTotalQueries = this.testBasicLength;
                break;
            case "extra":
                this.quizCurrentQuery = currentQuery - this.testBasicLength;
                this.quizLengthQueries = this.testExtraLength;
                this.quizListQueries = this.testExtraQueries;
                this.quizTotalQueries = this.testAllLength;
                break;
            case "all":
                this.quizCurrentQuery = currentQuery;
                this.quizLengthQueries = this.testAllLength;
                this.quizListQueries = this.testAllQueries;
                this.quizTotalQueries = this.testAllLength;
                break;
        }
    }

    /**
     * .
     *
     */
    nextQuery() {
        if (this.quizCurrentQuery < this.quizLengthQueries) {
            return this.quizListQueries[this.quizCurrentQuery++];
        } else {
            return null;
        }
    }

    /**
     * .
     *
     */
    calculateQuiz() {}
}

// Cria instancia global para gerenciar a aplicacao do teste politico:
var GlobalTest = PoliticalTest.loadInstance(dataPoliticalGps);
