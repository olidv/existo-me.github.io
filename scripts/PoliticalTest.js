/* --- POLITICAL GPS TEST CLASS ------------------------------------------------------------------ */

/** Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas. */
class PoliticalTest {
    // propriedades publicas:
    quizLastVersion = 0.0; // numero da ultima versao do teste
    quizDateVersion = null; // data da liberacao desta versao do teste
    quizTotalBasicQueries = 0; // numero total de questoes do teste
    quizListBasicQueries = []; // lista de questoes a serem respondidas
    quizTotalExtraQueries = 0; // numero total de questoes do teste
    quizListExtraQueries = []; // lista de questoes a serem respondidas

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // a versao pode ser utilizada na notificacao de novas questoes.
        this.quizLastVersion = 1.0;
    }

    /**
     * Carrega a definicao do teste Gps Politico em nova instancia de PoliticalGps.
     *
     * @param  {Object} data Dados mais recentes do teste do GPS Politico.
     */
    static loadInstance(data) {
        // transfere os valores recebidos para uma nova instancia de PoliticalTest...
        let newInstance = new PoliticalTest();
        newInstance = Object.assign(newInstance, data);
        console.table("Nova instancia de PoliticalTest criada: ", newInstance);

        return newInstance;
    }
}

// Cria instancia global para gerenciar a aplicacao do teste politico:
var GlobalTest = PoliticalTest.loadInstance(dataPoliticalGps);
