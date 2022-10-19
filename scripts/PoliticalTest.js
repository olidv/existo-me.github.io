/* --- POLITICAL GPS TEST CLASS ------------------------------------------------------------------ */

/**
 * Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas.
 */
class PoliticalTest {
    // propriedades publicas:
    testVersion = 0.0; // numero da versao do teste
    testLength = 0; // numero total de questoes do teste
    testQueries = []; // lista de questoes a serem respondidas

    // propriedades privadas: controle do generator de quetoes:
    quizCurrentQuery = 0; // numero da questao corrente do teste em andamento

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
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
        console.table("Nova instancia de PoliticalTest criada com sucesso: ", newInstance);

        return newInstance;
    }

    /**
     * .
     *
     * @param  {Number} currentQuery .
     */
    initQuiz(currentQuery) {
        this.quizCurrentQuery = currentQuery;
    }

    /**
     * .
     *
     */
    nextQuery() {
        if (this.quizCurrentQuery < this.testLength) {
            return this.testQueries[this.quizCurrentQuery++];
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
