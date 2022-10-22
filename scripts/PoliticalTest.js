/* --- POLITICAL GPS TEST CLASS ------------------------------------------------------------------ */

/**
 * Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas.
 */
class PoliticalTest {
    // propriedades publicas:
    testVersion = 0.0; // numero da versao do teste
    testLength = 0; // numero total de questoes do teste
    testQuests = []; // lista de questoes a serem respondidas
    testLabels = []; // denominacao para os eixos conforme a pontuacao (outcome):
    testIdeals = [];  // relacao de ideologias resultantes do teste:

    // propriedades privadas: controle do generator de quetoes:
    currentQuest = 0; // numero da questao corrente do teste em andamento

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
        this.currentQuest = currentQuery;
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
     */
    calculateScore() {}
}

// Cria instancia global para gerenciar a aplicacao do teste politico:
var GlobalTest = PoliticalTest.loadInstance(dataPoliticalGps);
