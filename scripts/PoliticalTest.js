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
    testIdeals = []; // relacao de ideologias resultantes do teste:

    // propriedades privadas: controle do generator de quetoes:
    currentQuest = 0; // numero da questao corrente do teste em andamento

    // maximos valores possiveis para o score:
    max_econ = 0;
    max_dipl = 0;
    max_govt = 0;
    max_scty = 0;

    // valor da pontuacao de cada questao respondida:
    val_econ = [];
    val_dipl = [];
    val_govt = [];
    val_scty = [];

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
    initQuiz(currentQuery, choices) {
        // posiciona na proxima questao, conforme onde o usuario se encontrava.
        this.currentQuest = currentQuery;

        // calcula os maximos valores para todas as questoes:
        this.max_econ = this.max_dipl = this.max_govt = this.max_scty = 0;
        for (var i = 0; i < this.testLength; i++) {
            this.max_econ += Math.abs(this.testQuests[i].outcome.econ);
            this.max_dipl += Math.abs(this.testQuests[i].outcome.dipl);
            this.max_govt += Math.abs(this.testQuests[i].outcome.govt);
            this.max_scty += Math.abs(this.testQuests[i].outcome.scty);
        }

        // inicializa os arrays de soma da pontuacao:
        this.val_econ = new Array(this.testlength);
        this.val_dipl = new Array(this.testlength);
        this.val_govt = new Array(this.testlength);
        this.val_scty = new Array(this.testlength);

        // caso o usuario ja respondeu algumas perguntas anteriormente:
        if (currentQuery > 0) {
            // soma ate onde parou:
            for (let i = 0; i < currentQuery; i++) {
                // identifica para a questao a respectiva escolha do usuario:
                let option = choices[i];

                // realiza a atualizacao dos rates:
                updateRate(i, option);
            }
        }
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
    updateRate(idx, option) {
        // identifica a questao e a respectiva escolha do usuario:
        let question = this.testQuests[idx];
        let mult = question.options[option].mult;

        this.val_econ[idx] = mult * question.outcome.econ;
        this.val_dipl[idx] = mult * question.outcome.dipl;
        this.val_govt[idx] = mult * question.outcome.govt;
        this.val_scty[idx] = mult * question.outcome.scty;
    }

    /**
     * .
     *
     */
    #calculateRate(sum, max) {
        return ((100 * (max + sum)) / (2 * max)).toFixed(1);
    }

    /**
     * .
     *
     */
    calculateScore() {
        // inicializa estrutura para a pontuacao a ser calculada para as respostas:
        let userScore = {
            name: null,
            side: null,
            zone: null,
            econ: 0,
            dipl: 0,
            govt: 0,
            scty: 0,
        };

        // soma todos os scores dos 4 eixos
        let sum_econ = this.val_econ.reduce((a, b) => a + b, 0);
        let sum_dipl = this.val_dipl.reduce((a, b) => a + b, 0);
        let sum_govt = this.val_govt.reduce((a, b) => a + b, 0);
        let sum_scty = this.val_scty.reduce((a, b) => a + b, 0);

        // calcula os rates dos eixos:
        userScore.econ = this.#calculateRate(sum_econ, this.max_econ);
        userScore.dipl = this.#calculateRate(sum_dipl, this.max_dipl);
        userScore.govt = this.#calculateRate(sum_govt, this.max_govt);
        userScore.scty = this.#calculateRate(sum_scty, this.max_scty);

        // identifica a ideologia do usuario:
        let userIdeal = null;
        let minDist = Infinity;
        for (let i = 0; i < this.testIdeals.length; i++) {
            let ideal = this.testIdeals[i];

            let dist = 0;
            dist += Math.pow(Math.abs(ideal.rate.econ - userScore.econ), 2);
            dist += Math.pow(Math.abs(ideal.rate.dipl - userScore.dipl), 1.73856063);
            dist += Math.pow(Math.abs(ideal.rate.govt - userScore.govt), 2);
            dist += Math.pow(Math.abs(ideal.rate.scty - userScore.scty), 1.73856063);
            if (dist < minDist) {
                minDist = dist;
                userIdeal = ideal;
            }
        }
        // obtem os parametros da ideologia do usuario:
        userScore.name = userIdeal.name;
        userScore.side = userIdeal.side;
        userScore.zone = userIdeal.zone;

        return userScore;
    }

    /**
     * .
     *
     */
    #getLabel(val, axis) {
        if (val > 100) {
            return "";
        } else if (val > 90) {
            return axis[0];
        } else if (val > 75) {
            return axis[1];
        } else if (val > 60) {
            return axis[2];
        } else if (val >= 40) {
            return axis[3];
        } else if (val >= 25) {
            return axis[4];
        } else if (val >= 10) {
            return axis[5];
        } else if (val >= 0) {
            return axis[6];
        } else {
            return "";
        }
    }

    /**
     * .
     *
     */
    getLabelEcon(val) {
        return this.#getLabel(val, this.testLabels.econ);
    }

    /**
     * .
     *
     */
    getLabelDipl(val) {
        return this.#getLabel(val, this.testLabels.dipl);
    }

    /**
     * .
     *
     */
    getLabelGovt(val) {
        return this.#getLabel(val, this.testLabels.govt);
    }

    /**
     * .
     *
     */
    getLabelScty(val) {
        return this.#getLabel(val, this.testLabels.scty);
    }
}

// Cria instancia global para gerenciar a aplicacao do teste politico:
var GlobalTest = PoliticalTest.loadInstance(dataPoliticalGps);
