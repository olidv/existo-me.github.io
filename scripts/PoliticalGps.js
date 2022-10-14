/* --- POLITICAL GPS CLASS ------------------------------------------------------------------ */

/** Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas. */
class PoliticalGps {
    // propriedades publicas:

    // propriedades publicas:
    quizLastVersion = 1.0; // numero da ultima versao do teste
    quizDateVersion = null; // data da liberacao desta versao do teste
    quizTotalBasicQueries = 0; // numero total de questoes do teste
    quizListBasicQueries = []; // lista de questoes a serem respondidas
    quizTotalExtraQueries = 0; // numero total de questoes do teste
    quizListExtraQueries = []; // lista de questoes a serem respondidas

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {string} version Nome do usuario ou apenas id para o local-storage.
     */
    constructor(version) {
        // a versao pode ser utilizada na notificacao de novas questoes.
        this.quizVersion = version;
    }

    /**
     * Carrega a definicao do teste Gps Politico em nova instancia de PoliticalGps.
     */
    static loadDataQuiz(version) {
        //console.table("Ultima versao do dataQuiz: ", dataQuiz);

        // transfere os valores para uma nova instancia de PoliticalGps...
        // TODO: Poderia repassar dataQuiz no constructor, para associar la...
        let objQuiz = new PoliticalGps(version);
        objQuiz = Object.assign(objQuiz, dataQuiz);
        console.table("Nova instancia de PoliticalGps criada: ", objQuiz);

        return objQuiz;
    }
}
